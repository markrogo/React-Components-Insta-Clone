// You do not need to change this file.
import React, {useState} from 'react';

const Comment = props => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  const { comment } = props;
  console.log ('here is props inside comments ', props)

  return (
    <div className='comment-text'>
      <span className='user'>{props.commentData.username}</span>
      {' '}
      <span className='comment'>{props.commentData.text}</span>
    </div>
  );
};


export default Comment;
