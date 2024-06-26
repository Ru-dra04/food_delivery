import React, { useState } from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'
const ExploreMenu = (props) => {
    
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our menu</h1>
      <p>Choose our incredible menu from various menu present in the array of dishes crafted with the finest ingridients and culinar expertise.One mission is to satisfy the carvings and elevate your dining experience.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return <div onClick={()=>{props.setexpst((prev)=>{return prev===item.menu_name?"All":item.menu_name})}} key={index} className='explore-menu-list-item'>
                <img className={props.expst===item.menu_name?"active":""} src={item.menu_image} alt="item-image" />
                <p>{item.menu_name}</p>
                </div>
        })}
      </div>
    <hr />
    </div>
  )
}

export default ExploreMenu
