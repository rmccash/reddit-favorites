
//FileName:     Post.jsx
//Assignment:   Assignment 01
//Author:       Rhys McCash
//Student #:    8825169
//Date:         02/21/2025
//Description:  This component represents a single Reddit post, displaying its title, score, and a link to the post. 
//              It also includes a button to add the post to the user's favorites.

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
