import React from "react";

const Post = ({ post, onFavorite }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>Score: {post.score}</p>
      <a href={post.permalink} target="_blank" rel="noopener noreferrer">View on Reddit</a>
      <button onClick={() => onFavorite(post.id)}>Add to Favorites</button>
    </div>
  );
};

export default Post;
