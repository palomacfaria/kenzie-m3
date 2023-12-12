import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
   const [fruitList, setFruitList] = useState([]);

   useEffect(() => {
      const getFruits = async () => {
         const { data } = await api.get("/fruits");         
         setFruitList(data);
      }
      getFruits();
   }, [])

   return (
      <div className="App">
         <ul>
            {fruitList.map(fruit => (
               <li key={fruit.id}>
                  {fruit.name}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default App;