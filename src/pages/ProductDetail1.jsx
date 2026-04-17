import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail1() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h2 className="p-6">Loading...</h2>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      
      <img
        src={product.thumbnail}
        className="w-60 my-4"
      />

      <p>{product.description}</p>

      <h2 className="text-green-600 font-bold mt-3">
        ${product.price}
      </h2>
    </div>
  );
}

export default ProductDetail1;