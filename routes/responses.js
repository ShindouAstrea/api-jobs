const express = require('express');
const app = express();

app.get('/', function(req, res)  {
    res.send('Route 1');
});
app.get('/route2', function(req, res)  {
    res.send('Route 2');
});
app.get('/route3', function(req, res) {
    res.send('Route 3');
})