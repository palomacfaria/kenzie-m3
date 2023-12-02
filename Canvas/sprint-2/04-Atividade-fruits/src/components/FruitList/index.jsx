export const FruitList = ({fruitsList}) => {
    return(
        <ul>
        {fruitsList.map((fruit, index) => (
          <li key={index}>
            <h3>{fruit.name}</h3>
            <span>{fruit.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
            <p>{fruit.category}</p>
          </li>
        ))}
      </ul>
    )
}