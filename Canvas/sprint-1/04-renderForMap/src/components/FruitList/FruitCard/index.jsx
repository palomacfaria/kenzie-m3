export const FruitCard = ({fruit}) => {
    return(
        <li>
            <h3>{fruit.name}</h3>
            <p>{fruit.category}</p>
            <span>{fruit.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</span>
        </li>
    );
}