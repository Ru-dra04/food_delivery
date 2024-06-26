import React, { useContext } from 'react'
import "./Cart.css"
import {StoreContext} from "../../context/StoreContext"
import { Link } from 'react-router-dom';
const Cart = () => {
  //var total=0;
  const {add,food_list,removeItem,total,url}=useContext(StoreContext);
  return (
    <div>
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        </div>
      <br />
      <hr />
      {food_list.map((item,index)=>{
        if(add[item._id]>0){
          //total+=item.price*60*add[item._id];
          return <div><div className='cart-items-title cart-items-item'>
            <img src={`${url}/images/${item.image}`} alt="" />
            <p>{item.name}</p>
            <p>{item.price}/-</p>
            <p>{add[item._id]}</p>
            <p>{item.price*add[item._id]}/-</p>
            <p className='remove' onClick={()=>{removeItem(item._id)}}>x</p>
            </div>
            <hr />
          </div>
        }
      })}
    </div>
    <div className="cart-bottom">
      <div className="cart-total">
        <h2>Cart Totals</h2>
      <div>
        <div className="cart-total-details">
          <p>Sub Total</p>
          <p>{total(food_list)}/-</p>
        </div>
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>{total(food_list)===0?0:20}/-</p>
        </div>
        <div className="cart-total-details">
          <b>Total</b>
          <b>{total(food_list)===0?0:total(food_list)+20}/-</b>
        </div>
        </div>
        {total(food_list)===0?<button className='but'>PROCEED TO CHECKOUT</button>:<Link to='/order'><button className='but'>PROCEED TO CHECKOUT</button></Link>}
      
      </div>
    
    <div className="cart-promocode">
        <p>If you have a promo code, Enter it here</p>
        <div className="cart-promocode-input">
          <input type="text" placeholder='promocode' />
          <button>Submit</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Cart
