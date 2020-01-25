import React from 'react';
import ReactDOM from 'react-dom';
import hotelDetails from '../assets/jsons/hotelDetails.json';

class Home extends React.Component {
    constructor(props){
    super(props);
    console.log(hotelDetails[0].id);
    }
   
  render() {
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
                            <select className="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Select Drop State</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                            </select>
                        </div>
                          <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select className="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Select Drop City</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                            </select>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" className="btn btn-primary wrn-btn">Search</button>
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