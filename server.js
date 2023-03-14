var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (re, res) {
    res.send("get request recieved");
});

app.listen(port, function(){
    console.log('listening on port 8080');
});