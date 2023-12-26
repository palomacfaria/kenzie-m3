import { PhotoCard } from "./PhotoCard";

export const PhotoList = ({ photos, addFavorite }) => {
  return (
    <section>
      <ul>
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            addFavorite={addFavorite}
          />
        ))}
      </ul>
    </section>
  );
};
