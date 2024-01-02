import { Link } from "react-router-dom";
import { RoutesMain } from "./Routes/RoutesMain";

function App() {

  return (
    <>
      <header>
        <Link to="/">
          Home
        </Link>
        <Link to="/contact">
          Contact
        </Link>
        <Link to="/project">
          Project
        </Link>
        <Link to="/depoiment">
          Depoiments
        </Link>
      </header>
      <RoutesMain/>
    </>
  )
}

export default App;
