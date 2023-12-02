import { useState } from "react";
import { FruitList } from "./components/FruitList";

function App() {
  const initialValue = [
    {
      name: "Morango",
      price: 15,
      category: "Frutas"
    },
    {
      name: "Uva",
      price: 23,
      category: "Frutas"
    },
    {
      name: "Banana",
      price: 23,
      category: "Frutas"
    },
    {
      name: "Beterraba",
      price: 5,
      category: "Legumes"
    }
  ];

  const [fruitsList, setFruitsList] = useState(initialValue);

  const totalValue = fruitsList.reduce((currentValue, fruit) => {
    return currentValue + fruit.price;
  }, 0);

  const fruitFilter = fruitsList.filter(fruit => fruit.category === "Frutas");

  const vegetablesFilter = fruitsList.filter(vegetables => vegetables.category === "Legumes");

  const addNewFruit = (fruit) => {
    setFruitsList([...fruitsList, fruit]);
  }

  return (
    <div className="App">
      <h1>Total: {totalValue.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</h1>
      <FruitList fruitsList={fruitsList}/>
      <h2>Frutas</h2>
      <FruitList fruitsList={fruitFilter}/>
      <h2>Legumes</h2>
      <FruitList fruitsList={vegetablesFilter}/>
      <button onClick={() => addNewFruit({name: "Batata", price: 15, category:"Legumes"})}>Adicionar Batata</button>
    </div>
  );
}
export default App;
