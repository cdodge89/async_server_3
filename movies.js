var exports = module.exports;

var movies = {
    1:{
        'title':'Star Wars',
        'actors':['Mark Hamill', 'Harrison Ford','Carie Fisher'],
        'quotes':['I am your father', 'I was just going to Tosche station to pick up some power converters!', 'These are not the droids you are looking for.']
    },
    2:{
        'title':'Monty Python and the Holy Grail',
        'actors':['Graham Chapman','John Cleese', 'Terry Gilliam'],
        'quotes':['\'Tis but a scratch!', 'Strange women lyin\' in ponds disributin\' swords is no basis for a system of governemnt','Let\'s not bicker and argue over who killed who']
    },
    3:{
        'title':'Space Balls',
        'actors':['Rick Moranis', 'John Candy','Mel Brooks'],
        'quotes':['Comb the desert!','Light speed is too slow. We\'re gonna have to go right to ludicrous speed!']
    }
}

getAllMovies = function(){
    return movies;
}

getMovieById = function(id){
    return movies[id];
}

getActorsById = function(id){
    return movies[id]['actors'];
}

getQuotesById = function(id){
    return movies[id]['quotes'];
}

exports.getAllMovies = getAllMovies;
exports.getMovieById = getMovieById;
exports.getActorsById = getActorsById;
exports.getQuotesById = getQuotesById;