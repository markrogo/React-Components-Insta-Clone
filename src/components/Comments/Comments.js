import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  // console.log ('here is comments inside of comments ', props);

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {props.commentData.map ((comment) => (
        <Comment key = {comment.id} commentData = {comment} />
))}
    </div>
  );
};

export default Comments;




