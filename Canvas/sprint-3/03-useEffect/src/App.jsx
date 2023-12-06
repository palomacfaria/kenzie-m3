import { useState } from "react";
import { Modal } from "./components/Modal";

function App() {

  const [isOpen, setOpen] = useState();

  return (
    <div>
      <button onClick={() => setOpen(!isOpen)}>Button</button>
      {isOpen ? <Modal /> : null}
    </div>
  )
}

export default App;
