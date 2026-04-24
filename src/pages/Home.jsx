import React from 'react'
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import KitchenSlider from "../components/KitchenSlider";
import ElectronicsSlider from "../components/ElectronicsSlider";
import FeaturedCollection from "../components/FeaturedCollection";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
            <Slider />
                  <ProductList />
            <KitchenSlider />
              <ElectronicsSlider />
              <FeaturedCollection />

      <Footer />
    </div>
  )
}

export default Home
