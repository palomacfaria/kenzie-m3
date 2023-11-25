export const CategoryCard = ({img, name}) => {
  return (
    <li className="listSectionContainer__card">
      <img src={img} alt="" />
      <p className="paragraph2">{name}</p>
    </li>
  );
};
