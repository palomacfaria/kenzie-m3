export const FavoriteCard = ({ img, bio }) => {
  return (
    <li>
      <h2>Modal Aberto</h2>
      <img src={img} alt={bio} />
      <button>Botão de fechar</button>
    </li>
  );
};
