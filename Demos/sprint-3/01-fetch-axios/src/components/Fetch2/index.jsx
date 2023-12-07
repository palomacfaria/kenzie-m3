import { useState } from "react";

export const Fetch2 = () => {

    const [shoes, setShoes] = useState([]);

    const getShoes = async() => {
        const baseUrl = "http://localhost:3000/api/shoes";
        const response = await fetch(baseUrl, {method: "GET"});
        const json = await response.json();
        setShoes(json);
    }

    return(
        <>
            <button onClick={getShoes}>Carregar tênis</button>
            <ul>
                {shoes.map(({id, name, description, price, image}) => (
                    <li key={id}>
                        <img src={image} alt="" />
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <p>R$ {price}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}