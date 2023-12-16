import { PhotoCard } from "./PhotoCard";
import { photoAPI } from "../../services/api";
import { useState } from "react";

export const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  console.log(photos);

  const getPhotos = async () => {
    const { data } = photoAPI.get("/photos");
    setPhotos(data);
  };

  return (
    <section>
      <button onClick={getPhotos}>Carregar fotos</button>
      <ul>
        <PhotoCard img={""} bio={""} />
      </ul>
    </section>
  );
};
