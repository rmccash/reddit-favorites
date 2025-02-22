import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import FavoriteList from "./components/FavoriteList";
import { getFavorites, fetchFavoritePosts } from "./utils/localStorage";
import "./App.css";

const App = () => {
  const [subreddit, setSubreddit] = useState("gaming");
  const [posts, setPosts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchPosts(subreddit);
    loadFavorites();
  }, [subreddit]);

  const fetchPosts = async (subreddit) => {
    try {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=10`);
      const data = await response.json();
      const posts = data.data.children.map((post) => ({
        id: post.data.id,
        title: post.data.title,
        score: post.data.score,
        permalink: `https://www.reddit.com${post.data.permalink}`,
      }));
      setPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const loadFavorites = async () => {
    const favoritePosts = await fetchFavoritePosts();
    setFavorites(favoritePosts);
  };

  return (
    <div className="container">
      <h1>Reddit Favorites</h1>
      <SearchBar setSubreddit={setSubreddit} />
      <PostList posts={posts} setFavorites={setFavorites} />
      <FavoriteList favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
};

export default App;
