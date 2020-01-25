import React from 'react';
import logo from './logo.svg';
import Home from './components/HomeComponent';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HotelViewComponent from './components/HotelViewComponent';
function App() {
  return (
    <div className="App">      
      <Home/>
      <HotelViewComponent />
    </div>
  );
}

export default App;
