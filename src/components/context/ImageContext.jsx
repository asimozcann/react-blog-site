import { createContext, useEffect, useState } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos?client_id=Ff-VyconVVVF9kDsZALaL9h5oOheCD2ECPdVo9vlh-o"
        );
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <ImageContext.Provider value={{ images, loading }}>
      {children}
    </ImageContext.Provider>
  );
};


