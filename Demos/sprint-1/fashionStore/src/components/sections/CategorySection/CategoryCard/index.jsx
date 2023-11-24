export const CategoryCard = ({img, name}) => {
  return (
    <li>
      <img src={img} alt="" />
      <p>{name}</p>
    </li>
  );
};
