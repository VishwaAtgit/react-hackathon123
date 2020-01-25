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
<<<<<<< HEAD
      {/* <HotelViewComponent /> */}
=======
      <HotelViewComponent />
      <HotelListComponent />
>>>>>>> dbda4d5e22ef057bfe123f268d68a831487b7d24
    </div>
  );
}

export default App;
