import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Electronics = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Electronics Products</h1>

      {products.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/productview/${item.id}`)}
          className="mb-4 cursor-pointer rounded-lg border border-gray-300 p-4 transition hover:shadow-lg"
        >
          <img src={item.image} alt={item.title} width="100" />
          <h3>{item.title}</h3>

          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Electronics;
