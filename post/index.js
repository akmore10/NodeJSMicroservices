const express = require("express");
const {randomBytes} = require("crypto");
const bodyparser = require("body-parser");
const cors = require("cors");



const app = express();
app.use(bodyparser.json());
app.use(cors());
var posts = {}

app.get("/post",(req,res)=>{
    res.send(posts);
});

app.get('/post/delete',(req,res)=>{
    posts = {};
    res.send("Deleted");
});

app.post("/post",(req,res)=>{
    // creating a random id
    const id = randomBytes(4).toString("hex");
    // getting the data from the request
    const {title} = req.body;
    posts[id] = {
        id,
        title,
    };
    // sending the response
    res.status(201).send({id});
});

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});