// src/components/TicketCard.js
import React, { useState } from 'react';

const TicketCard = ({ carrier, departure, arrival, price, departurePlace, arrivalPlace, logo, tickets, wholeInfoTicket, funcTicket}) => {
  
  const handleAddingTickets = (prevTickets) => {
    if (!isActive) {
      if (!prevTickets.includes(wholeInfoTicket)) {
        return [...prevTickets, wholeInfoTicket];
      }
      return prevTickets;
    }
  }
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="ticket-card-outer" style={{backgroundColor: !isActive ? "#F5F0F0" : "#9e9e9e"}} onClick={()=> {
      setIsActive(!isActive);
      funcTicket(prevTickets => handleAddingTickets(prevTickets))
    }}>
      <div className="upper-card">
        <div className="aviacompany">
          <img className="image-aviacompany" src={logo} alt={`${carrier} logo`} />
          <h2 className="title-aviacompany">{carrier}</h2>
        </div>
        <div className="ticket-price-outer">
          <p className="ticket-price">{price}</p>
        </div>
      </div>
      <div className="lower-card">
        <div className="departure-outer">
          <div className="time-place-outer">
            <p className="time-departure">{departure}</p>
            <p className="place-departure">{departurePlace}</p>
          </div>
          <div className="date-departure">
            <p className="date-title">20 декабря, 2024, пт</p> {/* Можно передавать как пропс */}
          </div>
        </div>
        <div className="arrival-outer">
          <div className="time-place-outer">
            <p className="time-departure">{arrival}</p>
            <p className="place-departure">{arrivalPlace}</p>
          </div>
          <div className="date-departure">
            <p className="date-title">20 декабря, 2024, пт</p> {/* Можно передавать как пропс */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
