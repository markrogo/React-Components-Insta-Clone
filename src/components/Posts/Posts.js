import React, { useState } from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  // console.log (props);
  // console.log (props.postData[0]);

  return (
    <div className='posts-container-wrapper'>
      
     {props.postData.map ((post) => (
       console.log ('from the map ', post),
        <Post key={post.id} postData ={post} likePost={likePost}/>
      ))} 
      
    </div>
  );
};

export default Posts;


   {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}