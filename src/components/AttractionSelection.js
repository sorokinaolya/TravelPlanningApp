import React, { useState } from 'react';
import AttractionCard from './AttractionCard'; // Подключаем компонент для отображения карточки достопримечательности

function AttractionSelection({ setAttractions }) {
  const [attractions, setAttractionsState] = useState([]); // Состояние для хранения достопримечательностей

  // Моковые данные для достопримечательностей
  const handleSearchAttractions = () => {
    const mockAttractions = [
      {
        name: 'Эрмитаж',
        image: require('../assets/erm.jpg'), // Путь к картинке
        address: 'Санкт-Петербург, Дворцовая площадь, 2',
        description: 'Один из крупнейших и самых известных художественных музеев мира.',
        history: 'Эрмитаж был основан в 1764 году Екатериной II и с тех пор является одним из самых важных музеев в России.',
        nearestMetro: 'Адмиралтейская',
        price: '500 ₽',
      },
      {
        name: 'Церковь Спаса на Крови',
        image: require('../assets/cerk.jpg'), // Путь к картинке
        address: 'Санкт-Петербург, Канал Грибоедова, 2А',
        description: 'Красивая церковь с яркими мозаиками, построенная на месте убийства императора Александра II.',
        history: 'Церковь была построена в 1883 году в память о трагической смерти императора Александра II.',
        nearestMetro: 'Невский проспект',
        price: '350 ₽',
      },
      // Можно добавить больше данных...
    ];

    setAttractionsState(mockAttractions); // Обновляем состояние с достопримечательностями
  };

  return (
    <div className="attraction-selection">
      <h2>Выбор достопримечательностей</h2>

      <div>
        {/* Кнопка поиска */}
        <button 
          className="attraction-btn" 
          onClick={handleSearchAttractions}
        >
          Найти достопримечательности
        </button>
      </div>

      <div className="attraction-list">
        {attractions.length > 0 &&
          attractions.map((attraction, index) => (
            <AttractionCard
              funcAttr={setAttractions}
              wholeAttr={attraction}
              key={index}
              name={attraction.name}
              image={attraction.image}
              address={attraction.address}
              description={attraction.description}
              history={attraction.history}
              nearestMetro={attraction.nearestMetro}
              price={attraction.price}
            />
          ))}
      </div>
    </div>
  );
}

export default AttractionSelection;
