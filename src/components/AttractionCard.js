import React, { useState } from 'react';
import './AttractionCard.css'; // Стили для карточки достопримечательности

function AttractionCard({
  funcAttr,
  wholeAttr,
  name,
  image,
  address,
  description,
  history,
  nearestMetro,
  price
}) {

  const handleAddingAttr = (prevAttr) => {
    if (!prevAttr.includes(wholeAttr)) {
      return [...prevAttr, wholeAttr];
    }
    return prevAttr;
  }

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="attraction-card" style={{backgroundColor: !isActive ? "#F5F0F0" : "#9e9e9e"}} onClick={()=> {
      setIsActive(!isActive);
      funcAttr(prevAttr => handleAddingAttr(prevAttr))
    }}>
      <img src={image} alt={name} className="attraction-image" />
      <div className="attraction-info">
        <h3 className="attraction-name">{name}</h3>
        <p className="attraction-address">{address}</p>
        <p className="attraction-description">{description}</p>
        <p className="attraction-history">{history}</p>
        <div className="attraction-details">
          <p><strong>Ближайшее метро:</strong> {nearestMetro}</p>
          <p><strong>Цена за посещение:</strong> {price}</p>
        </div>
      </div>
    </div>
  );
}

export default AttractionCard;
