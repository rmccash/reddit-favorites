import React from "react";
import { removeFromFavorites } from "../utils/localStorage";

const FavoriteList = ({ favorites, setFavorites }) => {
  const removeFavorite = (postId) => {
    removeFromFavorites(postId);
    setFavorites((prev) => prev.filter((post) => post.id !== postId));
  };

  return (
    <div className="favorite-list">
      <h2>Favorites</h2>
      {favorites.length === 0 ? <p>No favorites yet.</p> : (
        favorites.map((post) => (
          <div key={post.id} className="favorite-post">
            <h3>{post.title}</h3>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">View on Reddit</a>
            <button onClick={() => removeFavorite(post.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoriteList;
