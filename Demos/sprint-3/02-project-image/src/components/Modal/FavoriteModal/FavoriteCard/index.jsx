export const FavoriteCard = ({ favorite, removeFavorite }) => {
  return (
    <li>
      <img src={favorite.img} alt={favorite.bio} />
      <button onClick={() => removeFavorite(favorite.id)}>
        Remover dos favoritos
      </button>
    </li>
  );
};