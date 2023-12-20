/* import { UseRef } from "./components/UseRef"; */
import { Modal } from "./components/Modal";
import { useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <UseRef /> */}
      <div className="App">
        <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
        {isOpen ? <Modal setIsOpen={setIsOpen}>Teste</Modal> : null}
      </div>
    </>
  )
}

export default App;
