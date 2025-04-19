import React, { useState } from 'react';

function RouteForm({ onSubmit }) {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ departureCity, arrivalCity, tripDate, returnDate });
  }; 

  return (
    <div className="route-form">
      <h2>Твой планировщик путешествий</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group-container">
          <div className="input-group">
            <input
              type="text"
              id="departureCity"
              value={departureCity}
              onChange={(e) => setDepartureCity(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="departureCity">Откуда:</label>
          </div>
          
          <div className="input-group">
            <input
              type="text"
              id="arrivalCity"
              value={arrivalCity}
              onChange={(e) => setArrivalCity(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="arrivalCity">Куда:</label>
          </div>
        </div>
        
        <div className="input-group-container">
          <div className="input-group">
            <input
              type="date" // Это поле для даты
              id="tripDate"
              value={tripDate}
              onChange={(e) => setTripDate(e.target.value)}
              required
            />
            <label htmlFor="tripDate">Туда:</label>
          </div>
          
          <div className="input-group">
            <input
              type="date" // Это поле для даты
              id="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
            <label htmlFor="returnDate">Обратно:</label>
          </div>
        </div>

        <button type="submit" className="start-planning-btn">Начать планирование</button>
      </form>
    </div>
  );
}

export default RouteForm;
