
//FileName:     PostList.jsx
//Assignment:   Assignment 01
//Author:       Rhys McCash
//Student #:    8825169
//Date:         02/21/2025
//Description:  This component displays the top 10 posts from a subreddit and allows users to add posts to their favorites.

import React from "react";
import { saveToFavorites } from "../utils/localStorage";

const PostList = ({ posts, setFavorites }) => {
  const addFavorite = (post) => {
    saveToFavorites(post);
    setFavorites((prev) => [...prev, post]);
  };

  return (
    <div className="post-list">
      <h2>Top Posts</h2>
      {posts.length === 0 ? <p>This community doesn't have any posts yet</p> : (
        posts.map((post) => (
          <div key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>Score: {post.score}</p>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">View on Reddit</a>
            <button onClick={() => addFavorite(post)}>Add to Favorites</button>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
