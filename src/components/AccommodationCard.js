import React, { useState } from 'react';
import './AccommodationCard.css';

function AccommodationCard({
  funcAccomodation,
  wholeAccomodation,
  name,
  image,
  address,
  description,
  price,
  area,
  distanceFromCenter,
  nearestMetro
}) {
  const handleAddingAccomodation = (prevAccomodation) => {
    if (!prevAccomodation.includes(wholeAccomodation)) {
      return [...prevAccomodation, wholeAccomodation];
    }
    return prevAccomodation;
  }

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accommodation-card" style={{backgroundColor: !isActive ? "#F5F0F0" : "#9e9e9e"}} onClick={()=> {
      setIsActive(!isActive);
      funcAccomodation(prevAccomodation => handleAddingAccomodation(prevAccomodation))
    }}>
      <img src={image} alt={name} className="accommodation-image" />
      <div className="accommodation-info">
        <h3 className="accommodation-name">{name}</h3>
        <p className="accommodation-address">{address}</p>
        <p className="accommodation-description">{description}</p>
        <ul className="accommodation-details">
          <li><strong>Площадь:</strong> {area} м²</li>
          <li><strong>Дальность от центра:</strong> {distanceFromCenter} км</li>
          <li><strong>Ближайшая станция метро:</strong> {nearestMetro}</li>
        </ul>
        <p className="accommodation-price">{price}</p>
      </div>
    </div>
  );
}

export default AccommodationCard;
