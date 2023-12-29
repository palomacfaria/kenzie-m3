import { Link } from "react-router-dom";
import { RoutesMain } from "./routes/RoutesMain";

function App() {

  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/contact">
            Contact
          </Link>
          <Link to="/about">
            About
          </Link>
        </nav>
      </header>
      <RoutesMain/>
    </div>
  )
}

export default App;
