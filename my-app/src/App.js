import React from 'react';
import logo from './logo.svg';
import Home from './components/HomeComponent';
// import HotelList from './components/HotelListComponent';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HotelViewComponent from './components/HotelViewComponent';
import HotelListComponent from './components/HotelListComponent.js';
function App() {
  return (
    <div className="App">      
      <Home/>
      <HotelViewComponent />
      <HotelListComponent />
    </div>
  );
}

export default App;
