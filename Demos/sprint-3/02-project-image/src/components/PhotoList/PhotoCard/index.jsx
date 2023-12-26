export const PhotoCard = ({photo, addFavorite}) => {
  return (
    <li onClick={() => addFavorite(photo)}>
      <img src={photo.img} alt={photo.bio} />
    </li>
  );
};
