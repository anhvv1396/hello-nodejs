var express = require('express');
var app = express();
app.get('/contract', function(req, res) {
    res.send('Hello node');
})
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})