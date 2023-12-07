import { useEffect, useState } from "react";


function App() {

  const [fruitList, setFruitList] = useState([]);

  useEffect(() => {
    const getFruits = async() => {
      const response = await fetch("https://fruit-fake-api.onrender.com/fruits");
      const json = response.json();
      setFruitList(json);
    }
    getFruits();
  }, []);

    return(
      <div className="App">
          <ul>
            {fruitList.map((fruit) => (
              <li key={fruit.id}>
                <h2>{fruit.name}</h2>
                <p>{fruit.price}</p>
              </li>
            ))}
          </ul>
      </div>
    )
}

export default App;
