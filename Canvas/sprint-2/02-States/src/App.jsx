import { useState } from "react"

export const App = () => {

  //Consegue armazenar na memória qualquer tipo de valor
/*   const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }

  const removeCount = () => {
    setCount(count - 1);
  } */

  const [nameList, setNameList] = useState(["Alex", "Vilson"]);

  const addName = () => {
    setNameList([...nameList, "Gabriel"]);
  }

  return (
      <div className="App">
        <ul>
          {nameList.map(name => <li key={name}>{name}</li>)}
        </ul>

        <button onClick={addName}>Adicionar nome</button>
      </div>

  )
}
