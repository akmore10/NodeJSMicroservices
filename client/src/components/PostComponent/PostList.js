import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CommentCreate from "../Comments/CommentCreate";
import CommentList from "../Comments/CommentList";

export default ()=>{
    const [posts, setPosts] = useState({});
    
    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:4000/post');
        setPosts(response.data);
    }

    useEffect(()=>{
        fetchPosts();
    
    },[]);

    const pleaseReturnAlltheValues = Object.values(posts).map(post=>{
        return(
            <div className="card" style={{
                "width": "30rem",
                "marginBottom": "20px",
                "marginLeft" : "20px",

                }}
                key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>

                    <CommentList postId={post.id}/>
                    <CommentCreate postId={post.id}/>
                </div>
                

            </div>
        )
    })
    return(
        <div className='d-flex flex-row flex-wrap justiy-content-between'>
            {pleaseReturnAlltheValues}
        </div>
    );
}