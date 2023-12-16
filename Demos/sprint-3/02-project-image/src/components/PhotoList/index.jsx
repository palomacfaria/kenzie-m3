import { useState } from "react";
import { photoAPI } from "../../services/api";
import { PhotoCard } from "./PhotoCard";

export const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  console.log(photos);

  const getPhotos = async () => {
    const { data } = await photoAPI.get("/photos");
    setPhotos(data);
  };

  return (
    <section>
      <button onClick={getPhotos}>Carregar fotos</button>
      <ul>
        {photos.map(({img, bio}) => <PhotoCard key={id} img={img} bio={bio} />)}
      </ul>
    </section>
  );
};
