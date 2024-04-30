const users = require('./Controllers/GoogleUserController');
const boards = require('./Controllers/boardController');
const pins = require('./Controllers/pinController');
const comments = require('./Controllers/commentController');

const express = require("express");
const app = express()

app.get('/', function(req, res){
    res.send("Hello world!");
 });


app.use('/users', users);
app.use('/boards', boards);
app.use('/pins', pins);
app.use('/comments', comments);

app.all('*', function(req, res){
    res.send("API call does not exist");
 });
 
console.log(
    'App listening on: ',
    'http://localhost:8080/')
app.listen(8080);