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

var server = app.listen(port, function(){
    console.log('listening at port ' + port);
});

/*
var express = require('express');
var app = express();
var router = express.Router();    

// REST API
router.route('/items')
.get(function(req, res, next) {
  res.send('Get');
})
.post(function(req, res, next) {
  res.send('Post');
});

router.route('/items/:id')
.get(function(req, res, next) {
  res.send('Get id: ' + req.params.id);
})
.put(function(req, res, next) {
  res.send('Put id: ' + req.params.id);
})
.delete(function(req, res, next) {
  res.send('Delete id: ' + req.params.id);
});

app.use('/api', router);

// index
app.get('/', function(req, res) {
  res.send('Hello world');
});

var server = app.listen(3000, function() {
  console.log('Express is listening to http://localhost:3000');
});
*/