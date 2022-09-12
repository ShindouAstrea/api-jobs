const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
const port = 3000;
app.set('port', process.env.PORT || port);
app.listen(app.get('port'), ()=>{
    console.log(`Server listening on ${app.get("port")}`)
});

app.get('/', function(req, res)  {
    res.send('Route 1');
});
app.get('/route2', function(req, res)  {
    res.send('Route 2');
});
app.get('/route3', function(req, res) {
    res.send('Route 3');
})