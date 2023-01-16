import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Home';
import Journeys from './Pages/Journeys'
import Stations from './Pages/Stations'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journeys" element={<Journeys />} />
          <Route path="/stations" element={<Stations />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
