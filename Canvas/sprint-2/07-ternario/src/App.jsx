import { useState } from "react";
import { Exemple } from "./components/Exemple";
import "./styles/styles.css";

function App() {

  const [isActive, setIsActive] = useState(false);
  //condição ? resposta verdadeira : resposta falsa

  return (
    <div className='App'>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Desativar" : "Ativar"}
      </button>
      <Exemple isActive={isActive}/>

      <div className={isActive ? "active" : ""}>Exemplo</div>
    </div>
  )
}

export default App;
