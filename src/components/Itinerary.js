import React from 'react';

function Itinerary({ routeData, tickets, accommodation, restaurants, attractions }) {
  return (
    <div className="itinerary">
      <h2>Ваш маршрут</h2>
      <div>
        <h3>Маршрут:</h3>
        <p>Отправление: {routeData.departureCity}</p>
        <p>Прибытие: {routeData.arrivalCity}</p>
        <p>Дата поездки: {routeData.tripDate}</p>
        <p>Дата возврата: {routeData.returnDate}</p>
      </div>

      <div>
        <h3>Билеты:</h3>
        {tickets.map((ticket, index) => (
          <div key={index}>{ticket.carrier} - {ticket.departure} - {ticket.arrival} - {ticket.price}</div>
        ))}
      </div>

      <div>
        <h3>Проживание:</h3>
        {accommodation.map((place, index) => (
          <div key={index}>{place.name} - {place.price}</div>
        ))}
      </div>

      <div>
        <h3>Рестораны:</h3>
        {restaurants.map((restaurant, index) => (
          <div key={index}>{restaurant.name}</div>
        ))}
      </div>

      <div>
        <h3>Достопримечательности:</h3>
        {attractions.map((attraction, index) => (
          <div key={index}>{attraction.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Itinerary;
