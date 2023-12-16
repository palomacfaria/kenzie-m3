import { FavoriteCard } from "./FavoriteCard";

export const FavoriteModal = () => {
  return (
    <div role="dialog">
      <div>
        <button>Botão fechar</button>
      </div>
      <ul>
        <FavoriteCard />
      </ul>
    </div>
  );
};
