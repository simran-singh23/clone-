import React from "react";
import { useNavigate } from "react-router-dom";

const Fashion = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Men", image: "https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/Revise/Halo/Men._SS300_QL85_FMpng_.png",
         link: "/men" },
    { name: "Women", image: "https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/Revise/Halo/Women._SS300_QL85_FMpng_.png",
         link: "/women" },
    { name: "Kids", image: "https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/Revise/Halo/Kids._SS300_QL85_FMpng_.png", 
        link: "/kids" },
    { name: "Handbags", image: "https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/Revise/Halo/Handbags._SS300_QL85_FMpng_.png",
       link: "/bags" },
    { name: "Watches", image: "https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/Revise/Halo/Watches._SS300_QL85_FMpng_.png",
       link: "/watches" },
          
         { name: "Jewellery", image: "https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/Revise/Halo/Jewellery._SS300_QL85_FMpng_.png", link: "/jewellery" },
    { name: "Shoes", image: "https://i.pinimg.com/736x/4f/86/da/4f86da37127de357e668e63be2f4f0bc.jpg", link: "/shoes" },
    { name: "Sunglasses", image: "https://i.pinimg.com/1200x/83/b8/99/83b8993e5c1b846dddb126b71de5ea76.jpg", 
        link: "/sunglasses" },
            { name: "Beauty", image: "https://i.pinimg.com/1200x/f5/4d/43/f54d43ea6791f51c8a5e2998a13c2b5c.jpg", link: "/beauty" },
    { name: "Accessories", image: "https://i.pinimg.com/736x/10/75/30/107530df7c2c2583430e28f50b348b44.jpg", link: "/accessories" },
  ];

  const deals = [
    
    {
      title: "WROGN Men's Shirt",price: "₹989",oldPrice: "₹2,199",image: "https://i.pinimg.com/736x/9f/71/b8/9f71b8bb22bad9be82e72d9f4cb15319.jpg",
    },
    {
      title: "WROGN T-Shirt",price: "₹749",oldPrice: "₹1,199",image: "https://i.pinimg.com/1200x/62/14/69/62146938c489f5e867199ad81ade8243.jpg",
    },
    {title: "Casual Shirt",price: "₹799", oldPrice: "₹1,399", image: "https://i.pinimg.com/1200x/ce/6c/fb/ce6cfbc75768a5f469a08d917b0e17d0.jpg",
    },
    {
      title: "Cotton Shirt", price: "₹1,299", oldPrice: "₹2,599", image: "https://i.pinimg.com/736x/4d/bf/f6/4dbff6346949c012bb9c6046ee582fab.jpg",
    },
  ];

  const brands = [
    { name: "Anni Designer", img: "https://i.pinimg.com/736x/d6/1c/87/d61c873eb7e190d1d185ce6b7fe57128.jpg", offer: "Under ₹499" },
    { name: "Janasiya", 
        img: "https://i.pinimg.com/736x/11/88/64/118864414ba45e6388ca4d1184ab3c7c.jpg", offer: "Under ₹599" },
    { name: "Lavie",
         img: "https://i.pinimg.com/736x/ca/ab/88/caab88a146bf15cb46e5a23a618f9a06.jpg", offer: "Under ₹999" },
    { name: "Lakme",  
         img: "https://i.pinimg.com/1200x/ab/81/e0/ab81e0037cdcbcd042d1e379e537c367.jpg", offer: "Under ₹299" },
    { name: "Allen Solly", 
            img: "https://i.pinimg.com/1200x/a4/48/66/a448663f61e275ec5b8b6f4fe7d114c3.jpg", offer: "Under ₹699" },
    { name: "Voylla", img: "https://i.pinimg.com/736x/9b/7b/98/9b7b984dc2d9e34e0c2260257a82e782.jpg", offer: "Starting ₹199" },
  ];

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-center mb-6">Fashion</h1>

\
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((item, index) => (
          <div key={index}
            onClick={
              () => navigate(item.link)}

            className="cursor-pointer text-center hover:scale-105 transition"
          >
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
            <p className="mt-2 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>


      <div className="bg-gray-200 p-4 rounded-xl mt-10">
        <h2 className="text-xl font-bold mb-4">
          Flat 50% off | Now on Amazon
        </h2>

        <div className="flex gap-4 overflow-x-auto">
          {deals.map((item, index) => (
            <div key={index} className="min-w-[180px] bg-white p-3
              rounded-lg shadow hover:scale-105 transition">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md" />
              <p className="mt-2 text-sm font-medium">{item.title}</p>
              <p className="font-bold">
                
                
                {item.price}</p>




              <p className="text-gray-500 line-through text-sm">{item.oldPrice}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Top brands on offer</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((item, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden cursor-pointer group">
              
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition"
              />

 
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white font-bold text-lg">
                  {item.name}
                </h3>
              </div>


              <div className="bg-yellow-400 text-center font-semibold py-1">
                {item.offer}
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Fashion;