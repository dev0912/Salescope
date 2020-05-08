var path = require('path');
var express = require('express');
var app = express();

var root = path.resolve(__dirname, 'build');
console.log(root)
app.use(express.static(root));

var port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Website is serving on the port', port)
  console.log('Press Ctrl-C to stop\n')
})
