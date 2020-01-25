import React from 'react';
import ReactDOM from 'react-dom';
import hotelDetails from '../assets/jsons/hotelDetails.json';
import location from '../assets/jsons/location.json';

class Home extends React.Component {
    constructor(props){
    super(props);  
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {hotelDetails:hotelDetails, locationDetails: location, hotelId:"", hotelName:""};
    }
   search(){
       
       console.log(this.state.hotelName);
   }
   handleChange = (event) => {     
     this.setState({ hotelName: event.target.value });
  };
  render() {
    const {  value } = this.state;
    return (
        <>
        <div className="container">
       
        <form action="#" method="post" novalidate="novalidate" className="search-block">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" className="form-control search-slt" placeholder="Search by hotel name" />
                        </div>
                         <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select className="form-control search-slt" id="exampleFormControlSelect1"  onChange={this.handleChange} value={value}>
                                <option>Select State</option>
                                {
                                    this.state.locationDetails.map(function(item, i){
                                        return <option value={item.state}>{item.state}</option>
                                    })
                                    }
                                
                            </select>
                        </div>
                          <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select className="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Select Drop City</option>
                                {
                                    this.state.locationDetails.map(function(item, i){
                                    
                                        return <option value={item.city}>{item.city}</option>
                                    })
                                    }
                            </select>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" className="btn btn-primary wrn-btn" onClick={this.search}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>         
        </div>
        </>
    )
  }
}

export default Home;