import React from 'react'
import "./MobileAppDownload.css"
import {assets} from "../../assets/assets"
const MobileAppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
       <p>For Better Experience Download <br />Tomato App</p>
       <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
       </div>
    </div>
  )
}

export default MobileAppDownload
