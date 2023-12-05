import { useState } from "react";

function App() {

  const getFruits = async() => {
    //GET
    const response = await fetch("https://fruit-fake-api.onrender.com/fruits");
    const json = await response.json();
    console.log(json);
  }

  const [postList, setPostList] = useState([]);

  const getPosts = async() =>{
    //GET
    const response = await fetch("https://blog-fake-api.onrender.com/news");
    const json = await response.json();
    setPostList(json);
  }


  return (
    <div className="App">
      <button onClick={getFruits}>Busca Frutas</button>
      <button onClick={getPosts}>Busca notícias</button>

      <ul>
         {postList.map(post => (
          <li key={post.id}>
            <span>{post.categoty}</span>
            <h2>{post.title} - {post.author}</h2>
            <p>{post.content}</p>
          </li>
         ))}
      </ul>
    </div>
  )
}

export default App;
