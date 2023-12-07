import { useState } from "react";

export const Fetch = () => {

    const [news, setNews] = useState([]);

    const getNews = async() => {
        const baseUrl = "https://blog-fake-api.onrender.com/news";
        const response = await fetch(baseUrl, {method: "GET"});
        const json = await response.json();
        setNews(json);
    }

    return(
        <>
            <button onClick={getNews}>Carregar notícias</button>
            <ul>
                {news.map(({id, title, category, author, content}) => (
                    <li key={id}>
                        <h2>{title}</h2>
                        <span>{category}</span>
                        <p>{content}</p>
                        <p>Escrito por: {author}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}