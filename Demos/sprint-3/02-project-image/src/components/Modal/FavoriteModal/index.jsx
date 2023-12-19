import { FavoriteCard } from "./FavoriteCard";

export const FavoriteModal = ({setVisible}) => {

  return (
    <div role="dialog">
      <div>
        <button onClick={() => setVisible(false)}>Fechar Modal</button>
      </div>
      <ul>
        <FavoriteCard setVisible={setVisible}/>
      </ul>
    </div>
  );
};
