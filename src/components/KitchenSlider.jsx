import { useNavigate } from "react-router-dom";

function KitchenSlider() {
  const navigate = useNavigate();

  const items = [
    { id: 1, img: "https://m.media-amazon.com/images/I/71g1L7w3UkL._SX679_.jpg" },
    { id: 2, img: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg" },
    { id: 3, img: "https://m.media-amazon.com/images/I/61M7cX7bYBL._SX679_.jpg" },
    { id: 4, img: "https://m.media-amazon.com/images/I/71V--WZVUIL._SX679_.jpg" },
    { id: 5, img: "https://m.media-amazon.com/images/I/71K+3c2U7dL._SX679_.jpg" },
    { id: 6, img: "https://m.media-amazon.com/images/I/71eUwDk8z+L._SX679_.jpg" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      
      <h2 className="text-xl font-bold mb-3">
        Starting ₹999 | Trending kitchen essentials
      </h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        
        {items.map((item) => (
          <img
            key={item.id}
            src={item.img}
            onClick={() => navigate("/electronics")} // 👈 CLICK → category page
            className="w-40 h-40 object-contain cursor-pointer hover:scale-105 transition"
          />
        ))}

      </div>
    </div>
  );
}

export default KitchenSlider;