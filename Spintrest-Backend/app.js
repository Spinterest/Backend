const users = require('./Controllers/userController')
const boards = require('./Controllers/boardController')
const pins = require('./Controllers/pinController')
const comments = require('./Controllers/commentController')
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