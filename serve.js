// var path = require('path');
// var express = require('express');
// var axios = require('axios');
// var qs = require('querystring');

// var app = express();

// var root = path.resolve(__dirname, 'build');
// app.use(express.static(root));

// app.get('/access_token', (req, res) => {
//   const requestBody = {
//     client_id: '3MVG96hCAx1bhPaglDTyFCa4LhXrXpBHi7cHCTNOI0xtdA_6FsjUqdjAmcVFXfsTDonw7TOCcoXA_FKua5DiR',
//     client_secret: '92D4E394B393940DF3592AFD15C59D5B0ED3080F71CD780E69EA8B6656AC9193',
//     grant_type: 'password',
//     username: 'salescope@cloudadvisory.io',
//     password: 'Cloudadv2020$'
//   };

//   axios({
//     method: 'post',
//     url: 'https://na134.salesforce.com/services/oauth2/token',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     data: qs.encode(requestBody)
//   })
//     .then((response) => {
//       console.log(response.data)
//       res.status(200).json(response.data)
//     })
//     .catch((err) => {
//       console.warn(err)
//       res.status(500).json(err)
//     })
// })

// var port = process.env.PORT || 3000

// app.listen(port, () => {
//   console.log('Website is serving on the port', port)
//   console.log('Press Ctrl-C to stop\n')
// })

// Load .env configuration file
require('dotenv').config();

// 3rd party dependencies
const path = require('path'),
	express = require('express'),
	session = require('express-session'),
	jsforce = require('jsforce');

const axios = require('axios');
const bodyParser = require('body-parser');

// Instantiate Salesforce client with .env configuration
const oauth2 = new jsforce.OAuth2({
	loginUrl: process.env.domain,
	clientId: process.env.consumerKey,
	clientSecret: process.env.consumerSecret,
	redirectUri: process.env.callbackUrl
});

// Setup HTTP server
const app = express();
const port = process.env.PORT || 8080;
app.set('port', port);

// Enable server-side sessions
app.use(
	session({
		secret: process.env.sessionSecretKey,
		cookie: { secure: process.env.isHttps === 'true' },
		resave: false,
		saveUninitialized: false
	})
);

// Serve HTML pages under root directory
app.use('/', express.static(path.join(__dirname, '../public')));

app.use( ( req, res, next ) => {
  res.header( 'Access-Control-Allow-Origin', '*' );
  res.header( 'Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' );
  next();
  } );


app.use(
bodyParser.urlencoded({
	extended: true
})
)

app.use(bodyParser.json())

/**
 *  Attemps to retrieves the server session.
 *  If there is no session, redirects with HTTP 401 and an error message
 */
function getSession(request, response) {
	const session = request.session;
	if (!session.sfdcAuth) {
		response.status(401).send('No active session');
		return null;
	}
	return session;
}

function resumeSalesforceConnection(session) {
	return new jsforce.Connection({
		instanceUrl: session.instanceUrl,
		accessToken: session.accessToken,
		version: process.env.apiVersion
	});
}

/**
 * Login endpoint
 */
app.get('/auth/login', function(request, response) {
	// Redirect to Salesforce login/authorization page
	response.redirect(oauth2.getAuthorizationUrl({ scope: 'api' }));
});

/**
 * Login callback endpoint (only called by Salesforce)
 */
app.get('/auth/callback', function(request, response) {
	if (!request.query.code) {
		response.status(500).send('Failed to get authorization code from server callback.');
		return;
	}

	// Authenticate with OAuth
	const conn = new jsforce.Connection({
		oauth2: oauth2,
		version: process.env.apiVersion
	});
	conn.authorize(request.query.code, function(error, userInfo) {
		if (error) {
			console.log('Salesforce authorization error: ' + JSON.stringify(error));
			response.status(500).json(error);
			return;
		}

		// Store oauth session data in server (never expose it directly to client)
		request.session.sfdcAuth = {
			instanceUrl: conn.instanceUrl,
			accessToken: conn.accessToken
		};

		const session = {
			instanceUrl: conn.instanceUrl,
			accessToken: conn.accessToken
		};

		const tk = Buffer.from(JSON.stringify(session)).toString('base64');

		response.redirect(`http://localhost:3000/call-history?tk=${tk}`);
		// response.redirect(`https://react-salescope.herokuapp.com/call-history?tk=${tk}`);
	});
});

/**
 * Logout endpoint
 */
app.get('/auth/logout', function(request, response) {
	const session = getSession(request, response);
	if (session == null) return;

	// Revoke OAuth token
	const conn = resumeSalesforceConnection(session);
	conn.logout(function(error) {
		if (error) {
			console.error('Salesforce OAuth revoke error: ' + JSON.stringify(error));
			response.status(500).json(error);
			return;
		}

		// Destroy server-side session
		session.destroy(function(error) {
			if (error) {
				console.error('Salesforce session destruction error: ' + JSON.stringify(error));
			}
		});

		// Redirect to app main page
    // return response.redirect('/index.html');
    return response.redirect('http://localhost:3000/login');
	});
});

/**
 * Endpoint for retrieving currently connected user
 */
app.get('/auth/whoami', function(request, response) {
  const session = request.query.session;
	if (session == null) {
		return;
	}

	const ss = Buffer.from(session, 'base64').toString('binary');

	// Request session info from Salesforce
	const conn = resumeSalesforceConnection(JSON.parse(ss));
	conn.identity(function(error, res) {
		response.send(res);
	});
});

/**
 * Endpoint for performing a SOQL query on Salesforce
 */
app.get('/query', function(request, response) {
	const session = getSession(request, response);
	if (session == null) {
		return;
	}

	const query = request.query.q;
	if (!query) {
		response.status(400).send('Missing query parameter.');
		return;
	}

	const conn = resumeSalesforceConnection(session);
	conn.query(query, function(error, result) {
		if (error) {
			console.error('Salesforce data API error: ' + JSON.stringify(error));
			response.status(500).json(error);
			return;
		} else {
			response.send(result);
			return;
		}
	});
});

app.post('/query', function(request, response) {
	const { body } = request;
	const { session, data, method, url } = body;
	const saleforceSession = JSON.parse(Buffer.from(session, 'base64').toString('binary'));
	const { instanceUrl, accessToken } = saleforceSession;

	let requestConfig = {
		headers: {
			Authorization: `Bearer ${accessToken}`
		},
		method,
		url: `${instanceUrl}/${url}`
	};

	if (method.toLowerCase() === 'get') {
		requestConfig = {
			...requestConfig,
			params: data
		}
	} else { // to-do need to handle other
		requestConfig = {
			...requestConfig,
			data
		}
	}

	axios(requestConfig).then(function(resss) {
		console.log(resss);
		response.status(200).send(resss.data);
	}).catch(err => response.status(500))
});

app.listen(app.get('port'), function() {
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});
