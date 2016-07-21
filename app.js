var http = require('http');
var express = require('express');
var movies = require('./movies');
var app = express();
var port = 8080;

app.get('/movies',function(req,res){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(movies.getAllMovies()));
});

app.get('/movies/:id', function(req,res){
    var id = req.params.id;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(movies.getMovieById(id)));
});

app.get('/movies/:id/actors',function(req,res){
    var id = req.params.id;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(movies.getActorsById(id)));
});

app.get('/movies/:id/quotes',function(req,res){
    var id = req.params.id;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(movies.getQuotesById(id)));
});

app.get('/*',function(req,res){
    res.end("PAGE NOT FOUND");
});

app.listen(port);
console.log('listening at port ' + port);