import React from 'react';
import ReactDOM from 'react-dom';

class HotelViewComponent extends React.Component {
  render() {
    return (
        <>
        <div className="container p-0">       
        <div className="HotelListView">
        <div className="col-lg-4 col-md-4 col-sm-12 p-0">
        <img src="https://pbs.twimg.com/media/EGHYvttU4AAYKb7?format=jpg&name=large" class="d-block w-100" alt="..." />
         </div>
         <div className="col-lg-6 col-md-6 col-sm-12 hotelDetails">
             <p><b>HotelName :</b> Hotel Name   
                 <span class="float-right"><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i></span></p>
             <p><b>Address: </b>Some Address</p>
             <p><b>Room Type: </b>AC | Non-AC</p>
            
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 ">
            <button className="btn btn-xlarge">View Details</button>
            <button className="btn btn-xlarge">Book Now</button>
            
            </div>
        </div>
        </div>
       
        </>
    )
  }
}

export default HotelViewComponent;