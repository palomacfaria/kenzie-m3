export const FavoriteCard = ({ img, bio }) => {
  return (
    <li>
      <img src={img} alt={bio} />
      <button>Fechar</button>
    </li>
  );
};
