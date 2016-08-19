var express = require('express');
var Busboy = require('busboy');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/get-file-size', function(req, res) {
  res.send(req.headers);
});

app.listen(app.get('port'), function() {
  console.log('App is listening on port', app.get('port'));
});
