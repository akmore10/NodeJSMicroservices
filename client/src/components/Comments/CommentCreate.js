import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export default ({postId}) => {
    const [comment, setComment] = useState('');


    const onSubmit = async (e)=>{
        e.preventdefault();
        await axios.post(`http://localhost:4032/post/${postId}/comment`,{
            comment
        })
        setComment('');
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input value={comment} onChange={(e)=>setComment(e.target.value)} type="text" className="form-control" placeholder="Enter comment" />
                    <button className="btn btn-primary">Submit</button> 
                </div>
            </form>
        </div>
    );
}