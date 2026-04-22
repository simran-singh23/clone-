import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);



        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 className="p-6">Loading...</h2>;

  if (!product) return <h2 className="p-6">Product not found</h2>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
       
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-xl shadow"
          />
        </div>

 
        <div>
          <h1 className="text-3xl font-bold mb-3">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <div className="mb-3">
            <span className="text-yellow-500 font-semibold">
              ⭐ {product.rating}
            </span>
          </div>

          <h2 className="text-2xl text-green-600 font-bold mb-4">
            ${product.price}
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Brand: {product.brand}
          </p>

          <p className="text-sm text-gray-500 mb-6">

            Category: {product.category}
          </p>


          <div className="flex gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded font-semibold">
              Add to Cart
            </button>

            <button className="bg-black text-white px-6 py-2 rounded font-semibold">
              Buy Now
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ProductDetail;