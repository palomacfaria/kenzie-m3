import { useState } from "react";
import { Modal } from "./components/Modal";

function App() {

  const [isOpen, setOpen] = useState(0);

  return (
      <div>
        <button onCLick={() => setOpen(!isOpen)}>Button</button>
        {isOpen ? <Modal/> : null}
      </div>
  )
}

export default App;
