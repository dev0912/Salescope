var path = require('path');
var express = require('express');
var axios = require('axios');
var qs = require('querystring');

var app = express();

var root = path.resolve(__dirname, 'build');
app.use(express.static(root));

app.get('/access_token', (req, res) => {
  const requestBody = {
    client_id: '3MVG96hCAx1bhPaglDTyFCa4LhXrXpBHi7cHCTNOI0xtdA_6FsjUqdjAmcVFXfsTDonw7TOCcoXA_FKua5DiR',
    client_secret: '92D4E394B393940DF3592AFD15C59D5B0ED3080F71CD780E69EA8B6656AC9193',
    grant_type: 'password',
    username: 'salescope@cloudadvisory.io',
    password: 'Cloudadv2020$'
  };

  axios({
    method: 'post',
    url: 'https://na134.salesforce.com/services/oauth2/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.encode(requestBody)
  })
    .then((response) => {
      console.log(response.data)
      res.status(200).json(response.data)
    })
    .catch((err) => {
      console.warn(err)
      res.status(500).json(err)
    })
})

var port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Website is serving on the port', port)
  console.log('Press Ctrl-C to stop\n')
})
