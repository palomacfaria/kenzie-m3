import { CategoryCard } from "./CategoryCard";
import { categories } from "../../../data.js";


export const CategorySection = () => {
  return (
    <section>
      <h2>CATEGORIAS</h2>
      <ul>
        {categories.map((el) => (
          <CategoryCard img={el.img} name={el.name} />
        ))}
      </ul>
    </section>
  );
};
