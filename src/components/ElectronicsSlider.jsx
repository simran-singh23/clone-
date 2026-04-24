import { useNavigate } from "react-router-dom";

function ElectronicsSlider() {
  const navigate = useNavigate();

  const items = [
    { id: 1, img: "https://i.pinimg.com/736x/43/f1/7d/43f17dd57f4437d83c719de0097e4ffe.jpg" },

    { id: 2, img: "https://i.pinimg.com/736x/4d/f6/3a/4df63a6aa48b91a48d4df8a4e50f5fba.jpg" },


    { id: 3, img: "https://i.pinimg.com/736x/88/72/b3/8872b3125cc1aa76136347cdc97eb4b5.jpg" },

         
    { id: 4, img: "https://i.pinimg.com/736x/fa/36/02/fa360287a1922cec921266b7349227e2.jpg" },

    { id: 5, img: "https://i.pinimg.com/736x/91/c3/82/91c382be2031c07666296ed9e5db4eeb.jpg" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">

      
      <h2 className="text-xl font-bold mb-3">
        Best Deals on Electronics
      </h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        
        {items.map((item) => (
          <img
            key={item.id}

            src={item.img}

            onClick={() => navigate("/electronics")}

            className="w-40 h-50 object-contain cursor-pointer hover:scale-105 transition"
          />
        ))}

      </div>
    </div>
  );
}

export default ElectronicsSlider;