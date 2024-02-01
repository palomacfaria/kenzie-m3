export const StudentCard = ({ name, age, country }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{country}</p>
    </li>
  );
};
