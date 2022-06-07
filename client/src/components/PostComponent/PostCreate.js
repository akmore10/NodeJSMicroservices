import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export default ()=>{
    const [title,setTitle] = useState();
    
    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:4000/post",{
            title,
        })

        setTitle("");
    } 


    return (
    <div className='container'>
        <h1>Create Post</h1>
        <form onSubmit={onSubmit}>
            <div className='form-group pt-2'>
                <label className='pb-2' >Title</label>
                <input value = {title} onChange= {(e)=>{setTitle(e.target.value)}} className='form-control pt-2'/>
            </div>
            <div className='pt-2'>
            <button  className='btn btn-primary '> Submit </button>
            </div>
        </form>
    </div>
    );
}