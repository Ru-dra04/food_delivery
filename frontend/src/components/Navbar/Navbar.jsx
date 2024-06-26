import React,{useContext, useState} from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = (props) => {
      const [click, setclick] = useState("");
      const {total,food_list,token,setToken}=useContext(StoreContext);
      const navigate=useNavigate();
      const logOut=()=>{
        localStorage.removeItem("token");
        setToken('');
        navigate('/');
      }
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => { setclick("home"); }} className={click === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => { setclick("menu"); }} className={click === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => { setclick("mobile-app"); }} className={click === "mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href='#footer' onClick={() => { setclick("contact"); }} className={click === "contact" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={total(food_list)===0?"":"dot"}></div>
        </div>
        {token?<div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <Link to='/myorders'><li><img src={assets.bag_icon} alt="" /><p>Orders</p></li></Link>
            <hr />
            <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div>:<button onClick={()=>{props.setlg(true)}}>sign in</button>}
        
      </div>
    </div>
  )
}

export default Navbar
