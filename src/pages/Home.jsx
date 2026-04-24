import React from 'react'
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import KitchenSlider from "../components/KitchenSlider";
import ElectronicsSlider from "../components/ElectronicsSlider";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
            <Slider />
                  <ProductList />
            <KitchenSlider />
              <ElectronicsSlider />

      <Footer />
    </div>
  )
}

export default Home
