import { useState, useEffect } from "react";
import { photoAPI } from "../../services/api";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { PhotoList } from "../../components/PhotoList";
import { FavoriteModal } from "../../components/Modal/FavoriteModal";

export const HomePage = () => {
  const [isVisible, setVisible] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      const { data } = await photoAPI.get("/photos");
      setPhotos(data);
    };

    getPhotos();
  }, []);

  const addFavorite = (photo) => {
    const hasFavorites = favorites.some((favorite) => favorite.id === photo.id);
    if (!hasFavorites) {
      setFavorites([...favorites, photo]);
    } else {
      console.log("Foto já adicionada");
    }
  };

  const removeFavorite = (favoriteId) => {
    const newFavorites = favorites.filter(({ id }) => id !== favoriteId);
    setFavorites(newFavorites);
  };

  return (
    <>
      <DefaultTemplate setVisible={setVisible}>
        <PhotoList photos={photos} addFavorite={addFavorite} />
      </DefaultTemplate>
      
      {isVisible ? (
        <FavoriteModal
          setVisible={setVisible}
          favorites={favorites}
          removeFavorite={removeFavorite}
        />
      ) : null}
    </>
  );
};
