const crawlers = require('./Controllers/CrawlerController');
const webs = require('./Controllers/WebController');
const spins = require('./Controllers/SpinController');
const spinComments = require('./Controllers/SpinCommentController');
const tags = require('./Controllers/TagController');
const spinTags = require('./Controllers/SpinTagsController');
const webSpins = require('./Controllers/WebSpinsController');
const spinLikes = require('./Controllers/SpinLikesController');
const commentLikes = require('./Controllers/CommentLikesController');
const complexCalls = require('./Controllers/ComplexController');

const express = require("express");
const app = express();

// This allows us to read the request body as JSON
app.use(express.json());

app.get('/', function(req, res){
    res.send("Hello world!");
 });


app.use('/crawlers', crawlers);
app.use('/webs', webs);
app.use('/spins', spins);
app.use('/spinComments', spinComments);
app.use('/tags', tags);
app.use('/spinTags', spinTags);
app.use('/webSpins', webSpins);
app.use('/spinLikes', spinLikes);
app.use('/commentLikes', commentLikes);
app.use('/complexCalls', complexCalls);

app.all('*', function(req, res){
    res.send("API call does not exist");
 });

console.log(
    'App listening on: ',
    'http://localhost:8080/')
app.listen(8080);