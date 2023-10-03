import React from "react";
import '../Css/index.css';

const CarCard = ({ car }) => {
    return (
      <div className="carCard">
        
        <img className="image-car" src={car.Image} alt={car.CarName} />      

        <div className="details">
            <h3> {car.CarName} {car.Model}</h3>
            <h3> {car.Brand} {car.Year}</h3>
        </div>

      </div>
    );
};

export default CarCard;