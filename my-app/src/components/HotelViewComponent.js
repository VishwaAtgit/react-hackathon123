import React from 'react';
import ReactDOM from 'react-dom';
import hotelDetails from '../assets/jsons/hotelDetails.json';
class HotelViewComponent extends React.Component {
    constructor(props){
        super(props);  
        this.state = {data:hotelDetails};
        }
  render() {
    return (
        <div className="container p-0">       
        <div className="HotelListView">
        <div className="col-lg-4 col-md-4 col-sm-12 p-0">
        <img src="https://pbs.twimg.com/media/EGHYvttU4AAYKb7?format=jpg&name=large" className="d-block w-100" alt="..." />
         </div>
         <div className="col-lg-6 col-md-6 col-sm-12 hotelDetails">
             <p><b>HotelName :</b> Hotel Name   
                 <span class="float-right"><i class="text-warning fa fa-star"></i><i className="text-warning fa fa-star"></i></span></p>
             <p><b>Address: </b>Some Address</p>
             <p><b>Room Type: </b>AC | Non-AC</p>
            
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 ">
            <button className="btn btn-xlarge">View Details</button>
            <button className="btn btn-xlarge">Book Now</button>
            
            </div>
        </div>
        <div className="container p-0">
        {
            this.state.data.map(function(item, i){
                console.log(item);
             return (
                <div className="HotelListView">
                <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                <img src="https://pbs.twimg.com/media/EGHYvttU4AAYKb7?format=jpg&name=large" class="d-block w-100" alt="..." />
                 </div>
                 <div className="col-lg-6 col-md-6 col-sm-12 hotelDetails">
                     <p><b>HotelName :</b> {item.name}   
                         <span class="float-right"><i class="text-warning fa fa-star"></i><b className="ratings">{item.rating}</b></span></p>
                     <p><b>Address: </b> {item.address}, {item.state}, {item.city} </p>
                     <p><b>Room Type: </b>{item.hotelType}</p>
                    
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 ">
                    <button className="btn btn-xlarge">View Details</button>
                    <button className="btn btn-xlarge">Book Now</button>
                    
                    </div>
                </div>
                )
            })
        }       
        </div>
        </div>
    )
  }
}

export default HotelViewComponent;