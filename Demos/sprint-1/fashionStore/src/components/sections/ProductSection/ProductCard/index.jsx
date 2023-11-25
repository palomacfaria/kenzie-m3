export const ProductCard = ({img, name, price}) => {
  return (
    <li className="listSectionContainer__card">
      <img src={img} alt="#" />
      <p className="paragraph2">{name}</p>
      <p className="price">{price}</p>
    </li>
  );
};
