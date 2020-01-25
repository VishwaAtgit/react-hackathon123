import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
   
  render() {
    return (
        <div className="header" id="navbar">
           
        <nav className="navbar navbar-expand-lg navStyle">
        <div className="container">
        <h3><i><a className="brand-navbar" href="#">Hotel Booking Portal</a></i></h3>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#mainMenu">
            <span><i className="fas fa-align-right iconStyle"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav ml-auto navList">
                <li className="nav-item active"><a href="#" className="nav-link"><i className="fa fa-home"></i>HOME<span className="sr-only">(current)</span></a></li>
                <li className="nav-item">
                    <a href="#" className="nav-link"><i className="fa fa-cogs"></i>Services</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link"><i className="fa fa-briefcase"></i>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link"><i className="fa fa-phone"></i>Contact</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link"><i className="fa fa-users"></i>About</a>
                </li>
            </ul>
        </div>
   
    </div>
    </nav>
    </div>
    
    )
  }
}

export default Header;