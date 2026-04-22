import { useNavigate } from "react-router-dom";

function KitchenSlider() {
  const navigate = useNavigate();

  const items = [
    { id: 1, img: "https://i.pinimg.com/736x/b7/e6/cb/b7e6cb7dd76a9feadb887aaf1176455a.jpg" },

    { id: 2, img: "https://i.pinimg.com/1200x/73/e2/b5/73e2b5bf83b3f28c74e20a2a6c173d27.jpg" },

    { id: 3, img: "https://i.pinimg.com/736x/e9/bd/64/e9bd640aa7d6340cdcf85c60d874a9e0.jpg" },
     

    { id: 4, img: "https://i.pinimg.com/1200x/eb/04/64/eb0464574642e33d7081aa982b849b75.jpg" },
    
     { id: 5, img: "https://i.pinimg.com/736x/32/27/0c/32270c5d9b936c8a0d370a1952698312.jpg" },
    { id: 6, img: "https://i.pinimg.com/736x/a5/0c/e8/a50ce86882856cf2c787d66ef4e9242b.jpg" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      
      <h2 className="text-xl font-bold mb-3">
        Starting from 499rs Trending kitchen essentials
      </h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        
        {items.map((item) => (
          <img key={item.id}
src={item.img}
            onClick={() => navigate("/electronics")} 

            className="w-40 h-40 object-contain cursor-pointer hover:scale-105 transition"
          />
        ))}

      </div>
    </div>
  );
}

export default KitchenSlider;