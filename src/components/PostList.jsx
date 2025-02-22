import React from "react";
import { saveToFavorites } from "../utils/localStorage";

const PostList = ({ posts, setFavorites }) => {
  const addFavorite = (post) => {
    saveToFavorites(post);  // Save the entire post object
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
