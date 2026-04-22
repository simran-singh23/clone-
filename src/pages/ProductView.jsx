import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const addToCart = () => {
    alert("Product added to cart 🛒");
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} width="200" alt={product.title} />
      <p>{product.description}</p>
      <h3>₹ {product.price}</h3>

      <button onClick={addToCart}>Add to Cart 🛒</button>
    </div>
  );
};

export default ProductView;