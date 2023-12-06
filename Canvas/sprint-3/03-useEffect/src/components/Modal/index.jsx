import { useEffect } from "react";
import { useState } from "react";

export const Modal = () => {
    const [count, setCount] = useState(0);

    //Quando a montagem do componente acontecer
    useEffect(() => {
        console.log("Uma montagem aconteceu!");
    }, []);

    //Quando uma atualização acontecer
    useEffect(() => {
        console.log("Uma atualização aconteceu!");
    }, []);

    //Quando a desmontagem acontecer
    useEffect(() => {
        return () => {
            console.log("Uma desmontagem aconteceu");
        }
    }, [count]);

    const addCount = () => {
        setCount = count + 1;
    }

    return(
        <div>
            {count}
            <button onClick={addCount}>Incrementar</button>
        </div>
    )
}