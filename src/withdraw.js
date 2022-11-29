

import { useState } from "react";
// import {useContext} from "react";
import axios from "axios";
import './App.css'
// import { useNavigate } from "react-router-dom";
export default function Withdraw(){

// let style={
//   backgroundImage: "./image/bb.jpg",
//   height:'85vh',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',

// }
// const navigate=useNavigate();
const token=localStorage.getItem('x-auth');
const[bal,setbal]=useState();
 const [values,setValues]=useState(0);
 const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-auth':token
    }
  };
 async function withdraw(e) {
    e.preventDefault();
    const url = "https://server-kaviya.herokuapp.com/api/bank/withdraw";
    axios
      .post(url, {
        withdraw:values
      },config
      )
      
      .then((res) => {
       
        console.log(res.data)
        setbal(res.data.balance)
      })
      .catch((error) => {
      
        console.log(error.response.data);
         
        })
      // console.log(data);
  }
  
  
  

 
  
 
  return(<>

<center>
<div className='withdraw'>
<div >


  <h4>Account Withdraw Balance is ${bal}</h4>
  <br></br>
  <label>
  <input
							type="number"
							placeholder="Enter amount"
							name="withdraw"
              onChange={(e) =>
                setValues(Number(e.target.value) )
              }
							required
							
						/><br></br><br></br>
 <button onClick={withdraw}>Submit</button>
 
  </label>

 
 </div>
 </div>
 </center>
  </>)
}



