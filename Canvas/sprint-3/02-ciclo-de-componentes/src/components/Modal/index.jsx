import { useState } from "react";

export const Modal = () => {

    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }

    return(
        <div>
            {count}
            <button onCLick={addCount}>Incrementar contador</button>
        </div>
    )
}