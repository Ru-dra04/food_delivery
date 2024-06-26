import React, { useContext, useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
const LoginPopup = (props) => {
  const {url,token,setToken}=useContext(StoreContext);
    const [state,setstate]=useState("Login");
    const [data,setdata]=useState({
      name:'',
      email:'',
      password:''
    })
    const chanHandler=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setdata((prev)=>{
        return {...prev,[name]:value}
      })
    }
    const subHandler=async (e)=>{
      e.preventDefault();
      if(state==="Login"){
        const response=await axios.post(`${url}/api/user/login`,data);
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token);
          props.setlg(false);
        }
        else{
          alert(response.data.message);
        }
      }
      else{
        const response=await axios.post(`${url}/api/user/register`,data);
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token);
          props.setlg(false);
        }
        else{
          alert(response.data.message);
        }
      }
    }

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={subHandler}>
        <div className="login-popup-title">
            <h2>{state}</h2>
            <img onClick={()=>{props.setlg(false)}} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {state==="Login"?null:<input onChange={chanHandler} name='name' value={data.name} type='text' placeholder='abcdef..' required/>}
            <input onChange={chanHandler} name='email' value={data.email} type="email" placeholder='abc@gmail.com' required/>
            <input onChange={chanHandler} name='password' value={data.password} type="password" placeholder='Password' required/>
        </div>
        <button type='submit'>{state==="Sign-Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>I agree to all terms and conditions of privacy policy.</p>
        </div>
        {state==="Sign-Up"?<p>Already have an account <span onClick={()=>{setstate("Login")}}>Click here</span></p>:<p>Create a new account <span onClick={()=>{setstate("Sign-Up")}}>Click here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopup
