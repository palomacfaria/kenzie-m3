import { FruitCard } from "./FruitCard";

export const FruitList = ({fruitlist}) => {
    return(
        <ul>
            {fruitlist.map((fruit) => {
                return(
                    <FruitCard key={fruit.id} fruit={fruit}/>
                )
            })}
        </ul>
    )
}