import { useEffect, useState } from "react"

function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async() => {
      const response = await fetch("https://blog-fake-api.onrender.com/news");
      const json = await response.json();
      setNews(json);
    }
    getNews();
  }, []);

  return (
    <div className="App">
        <ul>
          {news.map((newsItem) => (
            <li key={newsItem.id}>
            <h2>{newsItem.category}</h2>
            <h3>{newsItem.title}</h3>
            <p>{newsItem.content}</p>
            <p>{newsItem.author}</p>
          </li>
          ))}
        </ul>
    </div>
  )
}

export default App
