const express = require("express");
const bodyparser = require("body-parser");
const {randomBytes} = require("crypto");
const cors = require("cors");

const app = express();
app.use(bodyparser.json());
app.use(cors());

const commentsByPostId = {}; 

app.get('/posts/:id/comments',(req,res)=>{

    res.send(commentsByPostId[req.params.id]||[]);

});

// creating comments
app.post('/posts/:id/comments',(req,res)=>{
    const id = randomBytes(4).toString("hex");
    const {content} = req.body;
    const comments = commentsByPostId[req.params.id] || [];
 
    comments.push({
        id,
        content
    });
    commentsByPostId[req.params.id] = comments;
    res.status(201).send({id});
});


app.listen(4032,()=>{
    console.log("Comment Serivce running on port 4032");
})