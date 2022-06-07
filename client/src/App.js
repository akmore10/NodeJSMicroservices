import React from 'react';
import PostCreate from './components/PostComponent/PostCreate';
import PostList from './components/PostComponent/PostList';
export default () => {
    return(
        <div className='container'>
        <PostCreate/>
        <hr/>
        <h1>Posts</h1>
        <PostList/>
        </div>
    );
}