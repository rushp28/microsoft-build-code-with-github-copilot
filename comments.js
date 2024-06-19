// Create web server
// Create a listener
// Create a response
// Create a request
// Create a route
// Create a method
// Create a status code
// Create a header
// Create a body
// Create a JSON object
// Create a JSON string
// Create a JSON response

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000');
});