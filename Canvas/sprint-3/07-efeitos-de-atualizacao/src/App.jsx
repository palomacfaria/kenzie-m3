import { useEffect, useState } from "react";
import { PostList } from "./components/PostList";
import { FavoriteList } from "./components/FavoriteList";

function App() {

  const [postList, setPostList] = useState([]);

  const localFavoritePosts = localStorage.getItem("@MYFAVORITEPOSTS");

  const [favoritePosts, setFavoritePosts] = useState(localFavoritePosts ? JSON.parse(localFavoritePosts) : []);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("https://blog-fake-api.onrender.com/news");
      const json = await response.json();
      setPostList(json);
    }
    getPosts();
  }, []);

  useEffect(() => {
    localStorage.setItem("@MYFAVORITEPOSTS", JSON.stringify(favoritePosts));
  }, [favoritePosts]);

  const addFavoritePost = (post) => {
    if(!favoritePosts.some(favoritePost => favoritePost.id === post.id)){
      setFavoritePosts([...favoritePosts, post]);
    }else{
      alert("Notícia já favoritada!")
    }
  }

  const removeFavoritePost = (postId) => {
    const newFavoritePosts = favoritePosts.filter(post => post.id !== postId);
    setFavoritePosts(newFavoritePosts);
  }

  return(
    <div className="App">
      <PostList postList={postList} addFavoritePost={addFavoritePost}/>
      <FavoriteList favoritePosts={favoritePosts} removeFavoritePost={removeFavoritePost}/>
    </div>
  )
}

export default App;