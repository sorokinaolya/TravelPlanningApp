import React, { useState } from 'react';
import AccommodationCard from './AccommodationCard'; // Подключаем компонент карточки

function AccommodationSelection({ setAccommodation }) {
  const [accommodation, setAccommodationState] = useState([]); // Состояние для жилья

  // Моковые данные для жилья
  const handleAccommodationSearch = () => {
    const mockAccommodation = [
      {
        name: 'Отель Парк',
        image: require('../assets/park.jpg'), // Используем require для импорта изображения
        address: 'Москва, ул. Парк, 10',
        description: 'Комфортабельные номера с видом на парк.',
        price: '3000 ₽/ночь',
        area: 30, // Площадь
        distanceFromCenter: 5, // Дальность от центра
        nearestMetro: 'Киевская', // Ближайшая станция метро
      },
      {
        name: 'Квартира в центре',
        image: require('../assets/central.jpg'), // Используем require для импорта изображения
        address: 'Москва, ул. Центр, 5',
        description: 'Современная квартира в центре города.',
        price: '2500 ₽/ночь',
        area: 45, // Площадь
        distanceFromCenter: 2, // Дальность от центра
        nearestMetro: 'Таганская', // Ближайшая станция метро
      },
    ];

    setAccommodationState(mockAccommodation); // Обновляем состояние с жильем
    // setAccommodation(mockAccommodation); // Передаем данные в родительский компонент
  };

  return (
    <div className="accommodation-selection">
      <h2>Выбор проживания</h2>

      <div>
        {/* Кнопка поиска */}
        <button 
          className="accommodation-btn" 
          onClick={handleAccommodationSearch}
        >
          Найти жилье
        </button>
      </div>

      <div className="accommodation-list">
        {accommodation.length > 0 &&
          accommodation.map((place, index) => (
            <AccommodationCard
              funcAccomodation={setAccommodation}
              wholeAccomodation={place}
              key={index}
              name={place.name}
              image={place.image}
              address={place.address}
              description={place.description}
              price={place.price}
              area={place.area} // Площадь
              distanceFromCenter={place.distanceFromCenter} // Дальность от центра
              nearestMetro={place.nearestMetro} // Ближайшая станция метро
            />
          ))}
      </div>
    </div>
  );
}

export default AccommodationSelection;
