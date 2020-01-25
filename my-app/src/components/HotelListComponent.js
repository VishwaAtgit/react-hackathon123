import React,{useState, useEffect} from 'react';
import hotelDetails from '../assets/jsons/hotelDetails.json';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

const HotelList = () => {
  const [data,setData]=useState();
  const data=
  hotelDetails.map((num)=><li>{num}</li>)
  const d = JSON.parse(data);


return(
  // <div className="container">
  <div>{d.id}</div>
  // </div>

  // <table>
  //   <thead>
  //     <th>hotel id</th>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         <td>{data.id}</td>
  //       </tr>
  //     </tbody>
  // </table>
)
}


export default HotelList;