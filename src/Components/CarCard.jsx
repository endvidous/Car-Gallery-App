import React from "react";
import { useState, useEffect } from "react";
import '../Css/index.css';

const CarCard = ({ car }) => {
  const [imageExists, setImageExists] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = car.Image;
    
    img.onload = () => {
      setImageExists(true); // Image exists, set the state to true
    };

    img.onerror = () => {
      setImageExists(false); // Image does not exist, set the state to false
    };
  }, [car.Image]);

  const imageSrc = imageExists ? car.Image : "https://cdn.shopify.com/s/files/1/0614/9947/4155/files/KITTEN-MEOW_480x480.jpg?v=1640061250";

    return (
      <div className="carCard">
        
        <img
          className="image-car"
          src={imageSrc}
          alt={car.CarName}
        />

        <div className="details">
            <h3> {car.CarName} {car.Model}</h3>
            <h3> {car.Brand} {car.Year}</h3>
        </div>

      </div>
    );
};

export default CarCard;