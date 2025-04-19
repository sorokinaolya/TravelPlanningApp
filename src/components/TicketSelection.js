// src/components/TicketSelection.js
import React, { useState } from 'react';
import TicketCard from './TicketCard';

function TicketSelection({ setTickets }) {
  const [ticketType, setTicketType] = useState('');
  const [selectedDeparturePlace, setSelectedDeparturePlace] = useState('');
  const [selectedArrivalPlace, setSelectedArrivalPlace] = useState('');
  const [filters, setFilters] = useState({
    price: '',
    departureTime: '',
    duration: '',
  });

  // Моковые данные для билетов с логотипами
  const [tickets, setTicketsState] = useState([]);

  // Данные для аэропортов и вокзалов
  const airports = [
    'Москва, Внуково', 'Москва, Шереметьево', 'Москва, Домодедово', 'Москва, Жуковский'
  ];

  const trainStations = [
    'Москва, Ленинградский вокзал', 'Москва, Киевский вокзал', 'Москва, Казанский вокзал', 'Москва, Ярославский вокзал'
  ];

  // Данные для логотипов авиакомпаний и ж/д
  const airlineLogos = {
    'Аэрофлот': 'logo.png',
    'Победа': 'pobeda.png',
    'Уральские авиалинии': 'UA.png',
    'Nordwind': 'nord.png',
    'S7': 's7.png',
    'РЖД': 'rd.png',
    'Ласточка': 'last.png',
    // Добавьте другие логотипы по аналогии
  };

  const handleSelectTicketType = (type) => {
    setTicketType(type);
    // Сбросить выбранные места при смене типа билета
    setSelectedDeparturePlace('');
    setSelectedArrivalPlace('');
  };

  const handleSearchTickets = () => {
    const mockTickets = [
      { carrier: 'Аэрофлот', departure: '10:00', arrival: '12:00', price: '5000 ₽', type: "plane", departurePlace: 'Москва, Внуково', arrivalPlace: 'Москва, Шереметьево' },
      { carrier: 'Победа', departure: '09:30', arrival: '11:50', price: '2500 ₽', type: "plane", departurePlace: 'Москва, Домодедово', arrivalPlace: 'Москва, Шереметьево' },
      { carrier: 'Уральские авиалинии', departure: '08:45', arrival: '11:05', price: '3500 ₽', type: "plane", departurePlace: 'Москва, Внуково', arrivalPlace: 'Москва, Домодедово' },
      { carrier: 'Nordwind', departure: '07:00', arrival: '09:15', price: '4000 ₽', type: "plane", departurePlace: 'Москва, Шереметьево', arrivalPlace: 'Москва, Жуковский' },
      { carrier: 'S7', departure: '11:20', arrival: '13:40', price: '4500 ₽', type: "plane", departurePlace: 'Москва, Домодедово', arrivalPlace: 'Москва, Внуково' },
      { carrier: 'РЖД', departure: '08:00', arrival: '10:30', price: '1500 ₽', type: "train", departurePlace: 'Москва, Ленинградский вокзал', arrivalPlace: 'Москва, Киевский вокзал' },
      { carrier: 'РЖД', departure: '15:00', arrival: '17:30', price: '1800 ₽', type: "train", departurePlace: 'Москва, Казанский вокзал', arrivalPlace: 'Москва, Ярославский вокзал' },
      { carrier: 'Ласточка', departure: '07:30', arrival: '09:00', price: '1200 ₽', type: "train", departurePlace: 'Москва, Ленинградский вокзал', arrivalPlace: 'Москва, Казанский вокзал' },
    ];

    setTicketsState(mockTickets); // Сохраняем билеты в локальном состоянии
    // setTickets(mockTickets); // Передаем билеты родительскому компоненту
  };

  return (
    <div className="ticket-selection">
      <h2>Выбор билетов</h2>
      <div>
        <button 
          className='avia-btn' 
          style={{backgroundColor: ticketType !== 'plane' ? "#515ed38a" : "lightgray"}} 
          onClick={() => handleSelectTicketType('plane')}
        >
          Авиабилеты
        </button>
        <button 
          style={{backgroundColor: ticketType !== 'train' ? "#515ed38a" : "lightgray"}} 
          onClick={() => handleSelectTicketType('train')}
        >
          Ж/Д билеты
        </button>
      </div>
      
      {/* Выбор места отправления и прибытия в зависимости от типа билета */}
      {ticketType === 'plane' && (
        <div>
          <h3>Выберите аэропорт отправления:</h3>
          <select onChange={(e) => setSelectedDeparturePlace(e.target.value)} value={selectedDeparturePlace}>
            <option value="">Выберите...</option>
            <option value="any">Любой</option>
            {airports.map((airport, index) => (
              <option key={index} value={airport}>{airport}</option>
            ))}
          </select>
          
          <h3>Выберите аэропорт прибытия:</h3>
          <select onChange={(e) => setSelectedArrivalPlace(e.target.value)} value={selectedArrivalPlace}>
            <option value="">Выберите...</option>
            <option value="any">Любой</option>
            {airports.map((airport, index) => (
              <option key={index} value={airport}>{airport}</option>
            ))}
          </select>
        </div>
      )}
      
      {ticketType === 'train' && (
        <div>
          <h3>Выберите вокзал отправления:</h3>
          <select onChange={(e) => setSelectedDeparturePlace(e.target.value)} value={selectedDeparturePlace}>
            <option value="">Выберите...</option>
            <option value="any">Любой</option>
            {trainStations.map((station, index) => (
              <option key={index} value={station}>{station}</option>
            ))}
          </select>
          
          <h3>Выберите вокзал прибытия:</h3>
          <select onChange={(e) => setSelectedArrivalPlace(e.target.value)} value={selectedArrivalPlace}>
            <option value="">Выберите...</option>
            <option value="any">Любой</option>
            {trainStations.map((station, index) => (
              <option key={index} value={station}>{station}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <button onClick={handleSearchTickets}>Найти билеты</button>
      </div>

      {/* Фильтруем билеты, если выбран конкретный аэропорт или вокзал */}
      <div>
        {tickets.length > 0 && tickets.map((ticket, index) => (
          (ticket.type === ticketType) && 
          ((selectedDeparturePlace === 'any' || ticket.departurePlace === selectedDeparturePlace) &&
           (selectedArrivalPlace === 'any' || ticket.arrivalPlace === selectedArrivalPlace)) ?
          <TicketCard
            wholeInfoTicket={ticket}
            funcTicket={setTickets}
            key={index}
            carrier={ticket.carrier}
            departure={ticket.departure}
            arrival={ticket.arrival}
            price={ticket.price}
            departurePlace={ticket.departurePlace}
            arrivalPlace={ticket.arrivalPlace}
            logo={require(`../assets/${airlineLogos[ticket.carrier]}`)} // Исправлено: правильная динамическая загрузка логотипа
          /> : null
        ))}
      </div>
    </div>
  );
}

export default TicketSelection;
