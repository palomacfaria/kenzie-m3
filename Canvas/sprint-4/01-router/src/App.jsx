import { Link } from "react-router-dom";
import { RoutesMain } from "./routes/RoutesMain";
import { useState } from "react";

function App() {

  const [isLogin, setIsLogin] = useState(false);

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
      <RoutesMain setIsLogin={setIsLogin}/>
    </div>
  )
}

export default App;
