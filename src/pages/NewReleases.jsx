import React, { useEffect, useState } from "react";

const categories = [
  "All",
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

const NewReleases = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState("All");

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  
  const filteredProducts =
    active === "All"
      ? products
      : products.filter((p) =>
          p.category.toLowerCase().includes(active.toLowerCase())
        );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      
    
      <div className="w-64 bg-white p-4 border-r">
        <h2 className="font-bold mb-4">Any Department</h2>

        {categories.map((cat, index) => (
          <p
            key={index}
            onClick={() => setActive(cat)}
            className={`cursor-pointer mb-2 ${
              active === cat ? "text-blue-600 font-semibold" : ""
            }`}
          >
            {cat}
          </p>
        ))}
      </div>

     
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">
          Hot New Releases
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg"
            >
              <img
                src={item.image}
                alt=""
                className="h-40 mx-auto object-contain"
                
              />

              <h3 className="text-sm mt-3 font-medium line-clamp-2">
                {item.title}
              </h3>

              <p className="text-red-500 font-bold mt-2">
                
                ₹{Math.round(item.price * 80)}
              </p>

              <p className="text-yellow-500 text-sm">
                ⭐ {item.rating.rate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewReleases;
