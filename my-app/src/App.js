import React from 'react';
import logo from './logo.svg';
import Home from './components/HomeComponent';
// import HotelList from './components/HotelListComponent';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HotelViewComponent from './components/HotelViewComponent';
import Header from './components/Header';
function App() {
  return (
    <div className="App">  
    <Header />    
      <Home/>
     <HotelViewComponent />
    </div>
  );
}

export default App;
