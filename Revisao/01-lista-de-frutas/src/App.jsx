import { useState } from "react";
import {FruitList} from "./components/FruitList";

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

  const [fruitList, setFruitList] = useState(initialValue);

  //Filtrando apenas as frutas
  const fruitFilter = fruitList.filter(fruit => fruit.category === "Frutas");

  //Filtrando apenas os legumes
  const vegetablesFilter = fruitList.filter(fruit => fruit.category === "Legumes");

  //Somar o calor total das frutas
  const totalValue = fruitList.reduce((currentValue, fruit) => {
    return currentValue + fruit.price;
  }, 0);

  //Adicionando uma fruta
  const addNewFruit = (fruit) => {
    setFruitList([...fruitList, fruit])
  }

  return (
    <div className="App">
      <h1>{totalValue}</h1>
      <FruitList fruitList={fruitList} />
      <h2>Frutas:</h2>
      <FruitList fruitList={fruitFilter} />
      <h2>Legumes:</h2>
      <FruitList fruitList={vegetablesFilter} />
      <button onClick={() => addNewFruit({name: "Batata", price: 15, category: "Legumes"})}>Adicionar Batata</button>
    </div>
  )
}

export default App;
