const users = require('./Controllers/GoogleUserController');
const boards = require('./Controllers/boardController');
const pins = require('./Controllers/PinController');
const comments = require('./Controllers/commentController');
const tags = require('./Controllers/TagController');

const express = require("express");
const app = express();

// This allows us to read the request body as JSON
app.use(express.json());

app.get('/', function(req, res){
    res.send("Hello world!");
 });


app.use('/users', users);
app.use('/boards', boards);
app.use('/pins', pins);
app.use('/comments', comments);
app.use('/tags', tags);

app.all('*', function(req, res){
    res.send("API call does not exist");
 });

console.log(
    'App listening on: ',
    'http://localhost:8080/')
app.listen(8080);