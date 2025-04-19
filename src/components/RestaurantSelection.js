import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard'; // Подключаем компонент карточки ресторана
import './RestaurantCard.css';

function RestaurantSelection({ setRestaurants }) {
  const [restaurants, setRestaurantsState] = useState([]); // Состояние для хранения ресторанов

  // Моковые данные для ресторанов
  const handleSearchRestaurants = () => {
    const mockRestaurants = [
      {
        name: 'Ресторан "Гурман"',
        image: require('../assets/gurman.jpg'), // Путь к картинке
        address: 'Москва, ул. Пушкина, д. 10',
        cuisine: 'Французская',
        avgCheck: '1500 ₽',
        nearestMetro: 'Театральная',
        description: 'Элегантный ресторан с французской кухней и потрясающим видом на город.',
      },
      {
        name: 'Пиццерия "Маэстро"',
        image: require('../assets/maestro.jpg'), // Путь к картинке
        address: 'Москва, ул. Арбат, д. 25',
        cuisine: 'Итальянская',
        avgCheck: '1200 ₽',
        nearestMetro: 'Арбатская',
        description: 'Традиционная итальянская пицца и паста с атмосферой Италии.',
      },
      // Можно добавить больше данных...
    ];

    setRestaurantsState(mockRestaurants); // Обновляем состояние с ресторанами
    // setRestaurants(mockRestaurants); // Передаем данные в родительский компонент
  };

  return (
    <div className="restaurant-selection">
      <h2>Выбор ресторанов</h2>

      <div>
        {/* Кнопка поиска */}
        <button 
          className="restaurant-btn" 
          onClick={handleSearchRestaurants}
        >
          Найти рестораны
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.length > 0 &&
          restaurants.map((restaurant, index) => (
            <RestaurantCard
              funcRest={setRestaurants}
              wholeRest={restaurant}
              key={index}
              name={restaurant.name}
              image={restaurant.image}
              address={restaurant.address}
              cuisine={restaurant.cuisine}
              avgCheck={restaurant.avgCheck}
              nearestMetro={restaurant.nearestMetro}
              description={restaurant.description}
            />
          ))}
      </div>
    </div>
  );
}

export default RestaurantSelection;
