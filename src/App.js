import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import Journeys from './Pages/Journeys'
import Stations from './Pages/Stations'
import axios from "axios";

function App() {
  const [dataJourney, setdataJourney] = useState([]);
  const getJourney = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
      setdataJourney(res.data);
    })
  }
  useEffect(() => {  
    getJourney();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journeys" element={<Journeys dataJourney={dataJourney} />} />
          <Route path="/stations" element={<Stations />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
