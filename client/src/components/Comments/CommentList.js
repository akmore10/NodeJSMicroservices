import React from "react";
import axios from "axios";
import { useState ,useEffect} from "react";

// import  useEffect  from "react"; never use like this it will waster half hour

export default ({postId}) => {
    const [comments,setComment] = useState([]);

    const fetchData = async ()=>{
        const res = await axios.get(`http://localhost:4032/posts/${postId}/comments`);
        setComment(res.data);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const renderElement = comments.map((comment) => {
        return(<li key = {comment.id}> {comment.content}</li>);
    })

    return <ul>{renderElement}</ul>
};