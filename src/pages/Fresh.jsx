import React, { useEffect, useState } from "react";

const Fresh = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
         .catch((err) => console.log(err));
  }, []);

  const addToCart = (item) => {
    alert(`${item.title} added to cart 🛒`);
  };

  return (
    <div className="p-6">
       
       <h1 className="text-2xl font-bold mb-6">Fresh Products 🍃</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl shadow-md p-4 
                hover:shadow-xl transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="mt-3 font-semibold text-lg">
              {item.title}
            </h3>

            <p className="text-green-600 font-bold">
              ₹ {item.price}
            </p>

            <button
              onClick={() => addToCart(item)}
              className="mt-3 w-full bg-green-500 text-white py-2
               rounded-lg hover:bg-green-600"
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fresh;