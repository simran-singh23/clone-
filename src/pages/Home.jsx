import React from 'react'
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import KitchenSlider from "../components/KitchenSlider";
const Home = () => {
  return (
    <div>
            <Slider />
                  <ProductList />
            <KitchenSlider />
    </div>
  )
}

export default Home
