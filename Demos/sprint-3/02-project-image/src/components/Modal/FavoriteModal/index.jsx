import { FavoriteCard } from "./FavoriteCard";

export const FavoriteModal = ({ setVisible, favorites, removeFavorite }) => {
  return (
    <div role="dialog">
      <div>
        <button onClick={() => setVisible(false)}>Fechar modal</button>
      </div>
      <ul>
        {favorites.map((favorite) => (
          <FavoriteCard
            key={favorite.id}
            favorite={favorite}
            setVisible={setVisible}
            removeFavorite={removeFavorite}
          />
        ))}
      </ul>
    </div>
  );
};
