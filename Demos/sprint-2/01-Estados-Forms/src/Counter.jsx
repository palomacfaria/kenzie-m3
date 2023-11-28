import { useState } from "react";

const Counter = () => {
    // let count = 0;

    // const add = () => {
    //     count ++;
    //     console.log(`O contador está em ${count}`)
    // }

    // const add = () => {
    //     count++

    //     const h1 = document.querySelector("h1");
    //     h1.innerHTML = count;
    // }


    //[Variável, Função Modificadora]
    const [count, setCount] = useState(0);
   
    const add = () => {
        setCount(count + 1);
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={add}>Adiciona +1 ao contador</button>
            <p>Valor em real {count.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
        </>
    )
}

export default Counter;