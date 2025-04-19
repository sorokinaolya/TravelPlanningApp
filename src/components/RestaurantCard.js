import React, { useState } from 'react';
import './RestaurantCard.css'; // Стили для карточки ресторана

function RestaurantCard({
  funcRest,
  wholeRest,
  name,
  image,
  address,
  cuisine,
  avgCheck,
  nearestMetro,
  description
}) {

  const handleAddingRest = (prevRest) => {
    if (!prevRest.includes(wholeRest)) {
      console.log(wholeRest);
      return [...prevRest, wholeRest];
      
    }
    return prevRest;
  }

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="restaurant-card" style={{backgroundColor: !isActive ? "#F5F0F0" : "#9e9e9e"}} onClick={()=> {
      setIsActive(!isActive);
      funcRest(prevRest => handleAddingRest(prevRest))
    }}>
      <img src={image} alt={name} className="restaurant-image"/>
      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-address">{address}</p>
        <p className="restaurant-cuisine"><strong>Кухня:</strong> {cuisine}</p>
        <p className="restaurant-description">{description}</p>
        <div className="restaurant-details">
          <p><strong>Средний чек:</strong> {avgCheck}</p>
          <p><strong>Ближайшее метро:</strong> {nearestMetro}</p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
