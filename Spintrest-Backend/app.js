const users = require('./Controllers/GoogleUserController');
const boards = require('./Controllers/boardController');
const pins = require('./Controllers/PinController');
const pinComments = require('./Controllers/PinCommentController');
const tags = require('./Controllers/TagController');
const pinTags = require('./Controllers/PinTagsController');
const boardPins = require('./Controllers/BoardPinsController');
const pinLikes = require('./Controllers/PinLikesController');
const commentLikes = require('./Controllers/CommentLikesController');

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
app.use('/pinComments', pinComments);
app.use('/tags', tags);
app.use('/pinTags', pinTags);
app.use('/boardPins', boardPins);
app.use('/pinLikes', pinLikes);
app.use('/commentLikes', commentLikes);

app.all('*', function(req, res){
    res.send("API call does not exist");
 });

console.log(
    'App listening on: ',
    'http://localhost:8080/')
app.listen(8080);