import { HomePage } from "./pages/HomePage";
import { FavoriteModal } from "./components/Modal/FavoriteModal"
import "./styles/index.scss";
import { useState } from "react";

const App = () => {

  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <HomePage setVisible={setVisible}/> 
      {isVisible ? <FavoriteModal  setVisible={setVisible}/> : null}
    </>
    )
};

export default App;