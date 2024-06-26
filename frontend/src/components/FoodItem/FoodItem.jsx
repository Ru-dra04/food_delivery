import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = (props) => {
  //const [add,setAdd]=useState(0);
  const {add,addItem,removeItem,url}=useContext(StoreContext);
  return (
    <div className='food-item'>
    <div className="food-item-img-container">
    <img className='food-item-image' src={`${url}/images/${props.img}`} alt="item" />
    {!add[props.id]?
    <img onClick={()=>{addItem(props.id)}} className='add' src={assets.add_icon_white} alt='add'/>:
    <div className='food-item-counter'>
      <img onClick={()=>{removeItem(props.id)}} src={assets.remove_icon_red} alt='remove-icon'/>
      <p>{add[props.id]}</p>
      <img onClick={()=>{addItem(props.id)}} src={assets.add_icon_green} alt='add-icon' />
      </div>}
    </div>
    <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{props.name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{props.description}</p>
        <p className="food-item-price">{props.price}/-</p>
    </div>
    </div>
  )
}

export default FoodItem
