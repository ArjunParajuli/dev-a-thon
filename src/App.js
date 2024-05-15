import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from './components/Header';
import HeadInp from "./components/HeadInp";
import Navbar from "./components/Navbar";
import Stays from "./components/Pages/Stays";
import Flights from "./components/Pages/Flights";
import FlightHotel from "./components/Pages/FlightHotel";
import Rentals from "./components/Pages/Rentals";
import Cruises from "./components/Pages/Cruises";
import Attractions from "./components/Pages/Attractions";
import Taxis from "./components/Pages/Taxis";

const Layout = () => (
  <div className="main">
    <div className="top-head">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HeadInp />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/flight-hotel" element={<FlightHotel />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/cruises" element={<Cruises />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/taxis" element={<Taxis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
