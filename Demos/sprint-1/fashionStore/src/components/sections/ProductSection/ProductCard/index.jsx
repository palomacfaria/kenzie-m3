export const ProductCard = ({img, name, price}) => {
  return (
    <li>
      <img src={img} alt="#" />
      <p>{name}</p>
      <p>{price}</p>
    </li>
  );
};
