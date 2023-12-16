import { useState } from "react";
import { FavoriteCard } from "./FavoriteCard";

export const FavoriteModal = () => {

  return (
    <div role="dialog">
      <div>
        <button>Fechar Modal</button>
      </div>
      <ul>
        <FavoriteCard setVisible={setVisible}/>
      </ul>
    </div>
  );
};
