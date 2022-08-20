import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Route, useParams,Redirect } from "react-router-dom";

const Sucess = () => {
    let { id } = useParams();
    const [verified, setVerified] = useState(false)

    useEffect(()=>{
        checkUser()
    })
const checkUser = async() => {
   
    const req =  await axios.post(`http://localhost:5000/checkPayment/${id}`)
    if(req.data.status === "complete"){
       setVerified(true)
    };
}


  return (<>
    {!verified ? <>
        <div>payment is verifing please wait </div>
    </>:
    <Redirect to="/"></Redirect>}
    </>
  )
}


export default Sucess