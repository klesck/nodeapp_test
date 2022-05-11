var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From KlescK" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World ololo" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! -_-" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
