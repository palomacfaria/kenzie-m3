import { ProductCard } from "./ProductCard";
import { products } from "../../../data.js"


export const ProductSection = () => {
  return (
    <section>
          <h2>PRODUTOS EM DESTAQUE</h2>
          <ul>
            {products.map((el) => (
              <ProductCard img={el.img} name={el.name} price={el.price}/>
            ))}
          </ul>
        </section>
  );
};

