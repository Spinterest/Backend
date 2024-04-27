const users = require('./Controllers/users')
const boards = require('./Controllers/boards')
const pins = require('./Controllers/pins')
const comments = require('./Controllers/comments')
var express = require("express");
var app = express()

app.get('/', function(req, res){
    res.send("Hello world!");
 });


app.use('/users', users)
app.use('/boards', boards)
app.use('/pins', pins)
app.use('/comments', comments)

app.all('*', function(req, res){
    res.send("API call does not exist");
 });
 
app.listen(3000);