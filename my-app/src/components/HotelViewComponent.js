import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import hotelDetails from '../assets/jsons/hotelDetails.json';

class HotelViewComponent extends React.Component {
    constructor(props){
        super(props);  
        this.state = {data:hotelDetails};
        }
  render() {
    return (
        <div className="container p-0">       
        
      
        {
            this.state.data.map(function(item, i){               
             return (
                <div className="HotelListView col-lg-12 col-md-12 col-sm-12">
=======
// import hotelDetails from '../assets/jsons/hotelDetails.json';
// class HotelViewComponent extends React.Component {
//     constructor(props){
//         super(props);  
//         this.state = {data:props.hotelData};
//         }
//   render() {
//     return (
//         <div className="container p-0">       
       
//         <div className="container p-0">
//         {
//             this.state.data.map(function(item, i){
//                 console.log(item);
//              return (
//                 <div className="HotelListView">
//                 <div className="col-lg-4 col-md-4 col-sm-12 p-0">
//                 <img src="https://pbs.twimg.com/media/EGHYvttU4AAYKb7?format=jpg&name=large" class="d-block w-100" alt="..." />
//                  </div>
//                  <div className="col-lg-6 col-md-6 col-sm-12 hotelDetails">
//                      <p><b>HotelName :</b> {item.name}   
//                          <span class="float-right"><i class="text-warning fa fa-star"></i><b className="ratings">{item.rating}</b></span></p>
//                      <p><b>Address: </b> {item.address}, {item.state}, {item.city} </p>
//                      <p><b>Room Type: </b>{item.hotelType}</p>
                    
//                     </div>
//                     <div className="col-lg-2 col-md-2 col-sm-12 ">
//                     <button className="btn btn-xlarge">View Details</button>
//                     <button className="btn btn-xlarge">Book Now</button>
                    
//                     </div>
//                 </div>
//                 )
//             })
//         }       
//         </div>
//         </div>
//     )
//   }
// }
const HotelViewComponent = (props) => {
  console.log("-------------------")
  if (props != null && props.hotelData != null) {
return (  
        <div className="container p-0">
        {
            props.hotelData.map(function(item, i){
                console.log(item);
             return (
              //  <div>{item.name}</div>
                <div className="HotelListView">
>>>>>>> cae1b679ce2e4044f668aa9d27b681c61744db0e
                <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                <img src="https://content.r9cdn.net/rimg/kimg/be/1a/ea67c51a-16eaa09ddbd.jpg" class="d-block w-100" alt="..." />
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
<<<<<<< HEAD
       
    )
=======
)
>>>>>>> cae1b679ce2e4044f668aa9d27b681c61744db0e
  }
}

export default HotelViewComponent;