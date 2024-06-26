import React, { useState } from 'react'
import "./Orders.css"
import axios from 'axios';
import {toast} from "react-toastify"; 
import { assets } from '../../assets/assets';
const Orders = () => {
  const [orders,setOrders]=useState([]);
  const [status,setStatus]=useState('');
  const url="https://food-delivery-628a.onrender.com";
  const fetchAllOrders=async()=>{
    const response=await axios.get(`${url}/api/order/all`);
    if(response.data.success){
      setOrders(response.data.data);
    }
    else{
      toast.error(response.data.message);
    }
  }
  fetchAllOrders();
  const chanHandler=async (event)=>{
    const id=event.target.id;
    const response=await axios.post(`${url}/api/order/status`,{orderId:id,status:event.target.value});
    if(response.data.success){
      await fetchAllOrders();
    }
    toast(response.data.message);
  }
  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className="order-item">
                  {order.items.map((item,index)=>{
                    if(index===order.items.length-1){
                      return item.name+" X "+item.quantity;
                    }
                    else{
                      return item.name+" X "+item.quantity+" , ";
                    }
                  })}
                </p>
                <p className="order-item-name">
                  {order.address.firstName+" "+order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street+","}</p>
                  <p>{order.address.city+" , "+order.address.state+" , "+order.address.country+" , "+order.address.zipcode}</p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p>Items : {order.items.length}</p>
              <p>{order.amount}/-</p>
              <select onChange={chanHandler} value={order.status} id={order._id}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
