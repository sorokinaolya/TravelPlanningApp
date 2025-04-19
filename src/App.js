import React, { useEffect, useState } from 'react';
import './styles.css';
import RouteForm from './components/RouteForm';
import TicketSelection from './components/TicketSelection';
import AccommodationSelection from './components/AccommodationSelection';
import RestaurantSelection from './components/RestaurantSelection';
import AttractionSelection from './components/AttractionSelection';
import Itinerary from './components/Itinerary';

function App() {
  const [routeData, setRouteData] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [accommodation, setAccommodation] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [attractions, setAttractions] = useState([]);

  const handleRouteSubmit = (data) => {
    setRouteData(data);
  };
  
  useEffect(()=>{
    console.log(tickets)
  },[tickets, setTickets])

  useEffect(()=>{
    console.log(restaurants)
  },[restaurants, setRestaurants])

  return (
    <div className="App">
      {!routeData ? (
        <RouteForm onSubmit={handleRouteSubmit} />
      ) : (
        <div>
          <TicketSelection setTickets={setTickets} />
          <AccommodationSelection setAccommodation={setAccommodation} />
          <RestaurantSelection setRestaurants={setRestaurants} />
          <AttractionSelection setAttractions={setAttractions} />
          <Itinerary
            routeData={routeData}
            tickets={tickets}
            accommodation={accommodation}
            restaurants={restaurants}
            attractions={attractions}
          />
        </div>
      )}
    </div>
  );
}

export default App;
