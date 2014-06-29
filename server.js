__ = require('underscore');

var express = require('express'),
beers = require('./routes/beers'),
people = require('./routes/people'),
votes = require('./routes/votes');
 

var app = express();
app.use(express.bodyParser());


app.use("/", express.static(__dirname + '/public'));

require('express-debug')(app, {/* settings */});



app.get('/beers', beers.index);
app.post('/beers', beers.post);
app.get('/beers/:id', beers.get);
app.put('/beers/:id', beers.put);
app.delete('/beers/:id', beers.delete);
 
app.get('/people', people.index);
app.post('/people', people.post);
app.get('/people/:id', people.get);
app.put('/people/:id', people.put);
app.delete('/people/:id', people.delete);
 
app.get('/votes', votes.index);
app.post('/votes', votes.post);
app.get('/votes/:id', votes.get);
app.put('/votes/:id', votes.put);
app.delete('/votes/:id', votes.delete);


app.listen(3000);
console.log('Listening on port 3000...');