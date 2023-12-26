import { useEffect, useState } from "react";
import { FavoriteCard } from "./FavoriteCard";

export const FavoriteModal = ({ setVisible, favorites }) => {
/*   const [count, setCount] = useState(0);

  //onMount:
  useEffect(() => {
    console.log("O componente foi montado");
  }, []);

  //onUpdate:
  useEffect(() => {
    console.log("O componente foi atualizado");
  }, [count]);

  //onDismount:
  useEffect(() => {
    return () => {
      console.log("O componente foi desmontado");
    };
  }, []); */

  return (
    <div role="dialog">
      {/* <button onClick={() => setCount(count + 1)}>
        Adicionar mais um ao contador valor atual {count}
      </button> */}
      <div>
        <button onClick={() => setVisible(false)}>Fechar Modal</button>
      </div>
      <ul>
        {favorites.map(({id, img, bio}) => (
          <FavoriteCard key={id} img={img} bio={bio} setVisible={setVisible} />
        ))}
        
      </ul>
    </div>
  );
};
