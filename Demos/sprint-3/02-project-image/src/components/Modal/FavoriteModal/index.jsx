import { FavoriteCard } from "./FavoriteCard";

export const FavoriteModal = () => {
  return (
    <div role="dialog">
      <div>
        <button>Fechar</button>
      </div>
      <ul>
        <FavoriteCard />
      </ul>
    </div>
  );
};
