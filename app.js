var http = require('http');
var express = require('express');
var movies = require('./movies');
var app = express();
var port = 8080;

app.get('/movies',function(req,res){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(movies.getAllMovies()));
});

app.listen(port);
console.log('listening at port ' + port);