import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [fruitList, setFruitList] = useState([]);

  useEffect(() => {
    const getFruits = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/fruits", {
          params: {
            category: category !== "" ? category : undefined
          }
        });
        setFruitList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getFruits();
  }, [category]);

  return (
    <div className="App">
      <ul>
        <li>
          <button onClick={() => setCategory("")}>Todos</button>
        </li>
        <li>
          <button onClick={() => setCategory("vermelha")}>Vermelhas</button>
        </li>
        <li>
          <button onClick={() => setCategory("amarela")}>Amarelas</button>
        </li>
      </ul>
      {loading ? (
        <p>Carregando....</p>
      ) : (
        <ul>
          {fruitList.map((fruit) => (
            <li key={fruit.id}>
              <h2>{fruit.name}</h2>
              <p>{fruit.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
