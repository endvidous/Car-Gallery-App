import React, { useState, useEffect } from "react";
import "../Css/index.css";
import { useLocation } from "react-router-dom";

const CarCard = ({ car }) => {

  const [imageExists, setImageExists] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const img = new Image();
    img.src = getAbsolutePath(car.Image, location.pathname);

    img.onload = () => {
      setImageExists(true);
    };

    img.onerror = () => {
      setImageExists(false);
    };
  }, [car.Image, location.pathname]);

  const getAbsolutePath = (relativePath, currentPath) => {
    // Changing Path so that it works in production 
    return `${currentPath.replace(/\/page\/\d+/, '/')}${relativePath.replaceAll('public/', '')}`;
  };

  const imageSrc = imageExists
    ? getAbsolutePath(car.Image, location.pathname)
    : "https://cdn.shopify.com/s/files/1/0614/9947/4155/files/KITTEN-MEOW_480x480.jpg?v=1640061250";


  return (
    <div className="carCard">
      <img className="image-car" src={imageSrc} alt={car.CarName} />
      <div className="details">
        <h3>
          {car.CarName} {car.Model}
        </h3>
        <h3>
          {car.Brand} {car.Year}
        </h3>
      </div>
    </div>
  );
};

export default CarCard;
