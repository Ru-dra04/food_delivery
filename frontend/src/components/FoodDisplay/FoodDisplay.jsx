import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = (props) => {
    const {food_list} =useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
              if(item.category===props.expst||props.expst==='All'){
                return <FoodItem key={index} id={item._id} name={item.name} img={item.image} price={item.price} description={item.description} category={item.category}/>
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
