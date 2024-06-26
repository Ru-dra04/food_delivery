import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Explore/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import MobileAppDownload from '../../components/MobileAppDownload/MobileAppDownload'
const Home = () => {
  const [expst,setexpst]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu expst={expst} setexpst={setexpst} />
      <FoodDisplay expst={expst}/>
      <MobileAppDownload/>
    </div>
  )
}

export default Home
