import React from 'react';
import logo from './logo.svg';
import Home from './components/HomeComponent';
// import HotelList from './components/HotelListComponent';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HotelViewComponent from './components/HotelViewComponent';
<<<<<<< HEAD
import Header from './components/Header';
=======
import HotelListComponent from './components/HotelListComponent.js';
>>>>>>> cae1b679ce2e4044f668aa9d27b681c61744db0e
function App() {
  return (
    <div className="App">  
    <Header />    
      <Home/>
<<<<<<< HEAD
     <HotelViewComponent />
=======
<<<<<<< HEAD
      {/* <HotelViewComponent /> */}
=======
      <HotelViewComponent />
      <HotelListComponent />
>>>>>>> dbda4d5e22ef057bfe123f268d68a831487b7d24
>>>>>>> cae1b679ce2e4044f668aa9d27b681c61744db0e
    </div>
  );
}

export default App;
