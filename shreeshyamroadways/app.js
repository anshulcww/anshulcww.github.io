var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + '/frontend/index.html');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});