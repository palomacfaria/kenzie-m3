import { CategoryCard } from "./CategoryCard";
import { categories } from "../../../data.js";


export const CategorySection = () => {
  return (
    <section className="listSectionContainer">
      <h2 className="title2">CATEGORIAS</h2>
      <ul className="listSectionContainer__ul">
        {categories.map((el) => (
          <CategoryCard img={el.img} name={el.name} />
        ))}
      </ul>
    </section>
  );
};
