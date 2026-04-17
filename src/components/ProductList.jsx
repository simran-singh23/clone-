import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="px-6 pb-10">
<div className="flex justify-center mb-8">
  <div className="bg-gradient-to-r from-gray-400 via-orange-100 to-pink-500 p-[2px] rounded-xl animate-pulse">
    
    <h1 className="text-3xl md:text-4xl font-extrabold px-8 py-3 bg-white rounded-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 shadow-lg">
      Shop Now 
    </h1>

  </div>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)} 

            className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden cursor-pointer"
          >
          
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold truncate">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-green-600 font-bold">
                     ${item.price}
                </span>

             
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    alert("Added to cart");
                  }}
                  className="bg-yellow-400 hover:bg-yellow-500 
                  px-3 py-1 rounded text-sm"
                >
                  Add
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default ProductList;