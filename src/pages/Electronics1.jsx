import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Electronics1() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        setProducts(data.products || []);
      })
      .catch((err) => {
        console.log("API ERROR:", err);
      });
  }, []);

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="shadow p-3 rounded cursor-pointer hover:shadow-xl"
          >
            <img src={item.thumbnail} className="h-32 w-full object-cover" />
            <h3 className="font-semibold">{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Electronics1;
