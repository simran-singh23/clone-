import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="px-6 pb-10">
      <h1 className="text-3xl font-bold mb-6">🔥 Trending Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
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

                <button className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-sm">
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