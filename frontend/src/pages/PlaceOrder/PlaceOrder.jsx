import React, { useContext, useState,useEffect} from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
const PlaceOrder = () => {
  const {total,food_list,token,add,url}=useContext(StoreContext);
  const [items,setItems]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  });

  const onChangeHanhler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setItems((prev)=>{return {
      ...prev,[name]:value
    }
    })
  }
  const onSub=async (e)=>{
    e.preventDefault();
    const orders=[]
    food_list.map((item)=>{
      if(add[item._id]>0){
        const itemInfo=item;
        itemInfo.quantity=add[item._id];
        orders.push(itemInfo);
      }
    })
    const itemData={
      address:items,
      items:orders,
      amount:total(food_list)+20
    }
    const response=await axios.post(`${url}/api/order/get`,itemData,{headers:{token}});
    if(response.data.success){
      const {session_url}=response.data;
      window.location.replace(session_url);

    }
    else{
      alert(response.data.message);
    }
  }
  
  return (
      <form className="place-order" onSubmit={onSub}>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" required onChange={onChangeHanhler} name='firstName' value={items.firstName} placeholder='First name'/>
            <input type="text" required onChange={onChangeHanhler} name='lastName' value={items.lastName} placeholder='Last name'/>
          </div>
          <input type="text" required onChange={onChangeHanhler} name='email' value={items.email} placeholder='Email address'/>
          <input type="text" required onChange={onChangeHanhler} name='street' value={items.street} placeholder='Street'/>
          <div className="multi-fields">
            <input type="text" required onChange={onChangeHanhler} name='city' value={items.city} placeholder='City'/>
            <input type="text" required onChange={onChangeHanhler} name='state' value={items.state} placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input type="text" required onChange={onChangeHanhler} name='zipcode' value={items.zipcode} placeholder='Zip code'/>
            <input type="text" required onChange={onChangeHanhler} name='country' value={items.country} placeholder='Country'/>
          </div>
          <input type="text" required onChange={onChangeHanhler} name='phone' value={items.phone} placeholder='Phone'/>
        </div>
        <div className="place-order-right">
        <div className="cart-total">
        <h2>Cart Totals</h2>
      <div>
        <div className="cart-total-details">
          <p>Sub Total</p>
          <p>{total(food_list)}/-</p>
        </div>
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>{20}/-</p>
        </div>
        <div className="cart-total-details">
          <b>Total</b>
          <b>{total(food_list)+20}/-</b>
        </div>
        </div>
        <button type='submit' className='but'>PROCEED TO PAYMENT</button>
      
      </div>
        </div>
      </form>
  )
}

export default PlaceOrder
