export const PhotoCard = ({ img, bio }) => {
  return (
    <li>
      <img src={img} alt={bio} />
    </li>
  );
};
