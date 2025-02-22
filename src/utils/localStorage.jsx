export const saveToFavorites = (post) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  // Check if the post already exists in favorites
  if (!favorites.some((favPost) => favPost.id === post.id)) {
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
  // No need to fetch posts from Reddit, since we store all required data already
  return favorites;
};
