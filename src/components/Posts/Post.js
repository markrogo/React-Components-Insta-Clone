import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;

  console.log ('Here is post :', props);
  console.log (props.postData.id);
  console.log ('here is comments :', props.postData.comments);

  return (
    <div className='post-border'>
      <PostHeader
        username={props.postData.username}
        thumbnailUrl={props.postData.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.postData.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(props.postData.id)} />
      {/* Comments also wants its props! */}
    
       <Comments commentData = {props.postData.comments} />

    </div>
  );
};

export default Post;
