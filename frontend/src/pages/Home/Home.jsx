import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FloodDisplay from '../../components/FloodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FloodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home