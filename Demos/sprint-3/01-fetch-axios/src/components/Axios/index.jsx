import axios from "axios";
import { useState } from "react";

export const Axios = () => {

    const [news, setNews] = useState([]);

    const getNews = async() => {
        const baseURL = "https://blog-fake-api.onrender.com";
        const api = axios.create({ baseURL, timeout: 5 * 1000 });
        const {data} = await api.get("/news");
        setNews(data);
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
    )
}