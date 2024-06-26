import React, { useContext } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
const Verify = () => {
  const [searchPa,setSearchPa]=useSearchParams();
  const {url}=useContext(StoreContext);
  const success=searchPa.get("success");
  const orderId=searchPa.get("OrderId");
  const navigate=useNavigate();
  const verifyOrder=async()=>{
    const response=await axios.post(`${url}/api/order/verify`,{success,orderId})
    if(response.data.success){
      navigate('/myorders');
    }
    else{
      navigate('/')
    }
  }
  verifyOrder();
  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  )
}

export default Verify
