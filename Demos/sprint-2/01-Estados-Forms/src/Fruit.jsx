import { useState } from "react";

export const Fruit = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [fruits, setFruits] = useState([
    { id: crypto.randomUUID(), name: "Damasco", price: 5 },
    { id: crypto.randomUUID(), name: "Ingá", price: 4 },
    { id: crypto.randomUUID(), name: "Siriguela", price: 8 },
    { id: crypto.randomUUID(), name: "Cereja", price: 6 },
    { id: crypto.randomUUID(), name: "Bergamota", price: 5 },
    { id: crypto.randomUUID(), name: "Tomate", price: 2 },
    { id: crypto.randomUUID(), name: "Tangerina", price: 5.5 },
  ]);

  const formatPrice = (price) => {
    const opts = { style: "currency", currency: "BRL" };
    return price.toLocaleString("pt-BR", opts);
  };

  const totalPrice = () => {
    const total = fruits.reduce((prev, curr) => prev + curr.price, 0);
    return formatPrice(total);
  };

  // Métodos modificadores não são permitidos em estados.
  // pop, unshift, push...

  const addFruit = ({ name, price }) => {
    const newFruit = { id: crypto.randomUUID(), name, price };
    setFruits([...fruits, newFruit]);

    setName("");
    setPrice(0);
  };

  const removeFruit = (id) => {
    const filteredFruits = fruits.filter((fruit) => fruit.id !== id);
    setFruits(filteredFruits);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name && price) {
      addFruit({ name, price });
    }
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <h2>Adicionar nova fruta</h2>

        <div>
          <label>Nome</label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Preço</label>
          <input
            min={0}
            required
            type="range"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
          <span>{formatPrice(price)}</span>
        </div>

        <button type="submit">Adicionar ao carrinho</button>
      </form>

      <section>
        <h2>Preço do carrinho</h2>
        <p>{totalPrice()}</p>
      </section>

      <section>
        <h2>Carrinho de compras</h2>
        <ul>
          {fruits.map(({ id, name, price }) => (
            <li key={id}>
              <p>Nome &rarr; {name}</p>
              <p>Preço &rarr; {formatPrice(price)}</p>
              <button onClick={() => removeFruit(id)}>Remover fruta</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};