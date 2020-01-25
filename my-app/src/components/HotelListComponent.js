import React from 'react';
import hotelDetails from '../assets/jsons/hotelDetails.json';
class HotelListComponent extends React.Component {
    constructor(props){
        super(props);  
        this.state = {data:hotelDetails}
        }

        render() {
            return (
                <>
                <div className="container p-0">
                        <div>
                         <table className="table table-light table-bordered">
                            <tr >
                                <th>Hotel Id</th>
                                <th>HotelName</th>
                                <th>Address</th>
                                <th>Hotel Rating</th>
                                <th>Phone Number</th>
                                <th>Actions</th>
                            </tr>
                            {
                                this.state.data.map(function(item, i) {
                                    return (
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name} </td>
                                            <td>{item.address}, {item.state}, {item.city}</td>
                                            <td>{item.rating}</td>
                                            <td>{item.number}</td>
                                            <td><button className="btn btn-xlarge">Details</button>
                                            <button className="btn btn-xlarge">Add Room</button></td>
                                        </tr>
                                    )
                                } )
                            }
                            
                        </table>
                        </div>
                      
                </div>
               
                </>
            )
          }
}

export default HotelListComponent
