
//FileName:     localStorage.js
//Assignment:   Assignment 01
//Author:       Rhys McCash
//Student #:    8825169
//Date:         02/21/2025
//Description:  This file manages local storage, allowing users to save and remove favorite posts using the Web Storage API.

export const saveToFavorites = (post) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  //Check if the post already exists in favorites
  if (!favorites.some((favPost) => favPost.id === post.id)) 
  {
    favorites.push(post);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export const removeFromFavorites = (postId) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites = favorites.filter((post) => post.id !== postId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const fetchFavoritePosts = async () => {
  const favorites = getFavorites();
  return favorites;
};
