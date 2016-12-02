var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
})


app.get('/rooms', function(req, res){
  res.sendFile(__dirname + '/room.html');
});

app.get('/about', function(req, res){
  res.sendFile(__dirname + '/about.html');
});



app.listen(3000);
console.log('Im here now');