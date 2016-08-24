var express = require('express');
var multer = require('multer');
var upload = multer({
  storage: multer.memoryStorage()
});

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/get-file-size', upload.single('file'), function(req, res) {
  res.json({size: req.file.size});
});

app.listen(app.get('port'), function() {
  console.log('App is listening on port', app.get('port'));
});
