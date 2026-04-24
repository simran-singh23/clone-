import React from "react";

const dealsData = [
  {
    id: 1,
    title: "Samsung Galaxy",
    price: "₹50,000",
    discount: "10% off",
    image: "https://i.pinimg.com/736x/43/f1/7d/43f17dd57f4437d83c719de0097e4ffe.jpg",
  },
  {
    id: 2,
    title: "OnePlus Pad",
    price: "₹20,000",
    discount: "15% off",



    image: "https://i.pinimg.com/736x/23/2f/d3/232fd33917b3d9c48bcf66160aa470a7.jpg",
  },
  
  {
    id: 3,
    title: "iPhone 14",
    price: "₹70,000",
    discount: "12% off",
    image: "https://i.pinimg.com/1200x/64/d2/15/64d2150e8ac30b0ed9ebf705a5ddad74.jpg",
  },
  {
    id: 4,
    title: "Realme Narzo",
    price: "₹15,000",
    discount: "20% off",
    image: "https://i.pinimg.com/736x/a9/65/3e/a9653eb69640de8d3101c6f8d0181e4a.jpg",
  },
  {
    id: 5,
    title: "Redmi Note 12",
    price: "₹18,000",
    discount: "18% off",
    image: "https://i.pinimg.com/1200x/0c/89/7e/0c897efb842aaebb69d45595ed3fc428.jpg",
  },
  {
    id: 6,
    title: "Vivo V27",
    price: "₹25,000",
    discount: "14% off",
    image: "https://i.pinimg.com/736x/f0/38/a8/f038a8ee6f94f357a0cf52fd6a08f316.jpg",
  },
  {
    id: 7,
    title: "Oppo Reno",
    price: "₹28,000",
    discount: "16% off",
    image: "https://i.pinimg.com/736x/18/d4/4e/18d44e631bd2c875eef6efdccd34e4d1.jpg",
  },
  {
    id: 8,
    title: "iPad Air",
    price: "₹55,000",
    discount: "10% off",
    image: "https://i.pinimg.com/736x/8e/db/3f/8edb3fc794d73e444b8c18f1793d9023.jpg",
  },
  {
    id: 9,
    title: "Samsung Tab S8",
    price: "₹60,000",
    discount: "13% off",
    image: "https://i.pinimg.com/736x/c4/7b/fc/c47bfc6eed00b2ff63f5fd7a7d51426e.jpg",
  },
  {
    id: 10,
    title: "Boat Headphones",
    price: "₹2,000",
    discount: "30% off",
    image: "https://i.pinimg.com/736x/7b/bf/ba/7bbfba8cac7aa5e4691717565743b35f.jpg",
  },
  {
    id: 11,
    title: "JBL Speaker",
    price: "₹5,000",
    discount: "25% off",
    image: "https://i.pinimg.com/736x/4b/47/ad/4b47ad3c1d26f464880911fdaad2578a.jpg",
  },
  {
    id: 12,
    title: "Sony Headphones",
    price: "₹8,000",
    discount: "22% off",
    image: "https://i.pinimg.com/236x/1b/fa/76/1bfa762dab40130c32239d03d10bb8da.jpg",
  },
  {
    id: 13,
    title: "HP Laptop",
    price: "₹65,000",
    discount: "17% off",
    image: "https://i.pinimg.com/736x/69/a0/ed/69a0edcfdb0746b90fecfa622d6363dd.jpg",
  },
  {
    id: 14,
    title: "Dell Inspiron",
    price: "₹70,000",
    discount: "15% off",
    image: "https://i.pinimg.com/736x/65/71/7f/65717fce25aedc7c3a677075869f3f8c.jpg",
  },
  {
    id: 15,
    title: "MacBook Air",
    price: "₹95,000",
    discount: "8% off",
    image: "https://i.pinimg.com/1200x/d2/14/be/d214beeb56ed27afe24cce08cc0b87ee.jpg",
  },
  {
    id: 16,
    title: "Asus ROG",
    price: "₹1,10,000",
    discount: "12% off",
    image: "https://i.pinimg.com/1200x/57/45/f0/5745f0ed540470237b5831b8cec7d63f.jpg",
  },
  {
    id: 17,
    title: "Smart Watch",
    price: "₹3,000",
    discount: "35% off",
    image: "https://i.pinimg.com/736x/63/8e/ea/638eeacb6545da2888641ea84b6609b6.jpg",
  },
  {
    id: 18,
    title: "Noise Buds",
    price: "₹1,500",
    discount: "40% off",
    image: "https://i.pinimg.com/736x/fd/6f/bc/fd6fbc68a0431eb62f651ff93eb56f72.jpg",
  },
  {
    id: 19,
    title: "Fire TV Stick",
    price: "₹4,000",
    discount: "28% off",
    image: "https://i.pinimg.com/736x/f1/9f/1a/f19f1a008cfc5bf22be8e810e599d2e9.jpg",
  },
  {
    id: 20,
    title: "Bluetooth Speaker",
    price: "₹2,500",
    discount: "32% off",
    image: "https://i.pinimg.com/1200x/3b/65/04/3b65042b9ca350c1128bde0ebb3a1b11.jpg",
  },
];

const Today = () => {
   
  
  const handleClick = (item) => {
    console.log(item);
    alert(item.title);
  };

  return (
  <div className="p-5">
  <h2 className="text-xl font-bold mb-4">Today's Deals</h2>

  <div className="flex flex-wrap gap-5">
    {dealsData.map((item) => (
      <div
        key={item.id}
        onClick={() => handleClick(item)}
        className="border p-3 cursor-pointer w-[200px] hover:shadow-lg"


      >
        <img src={item.image} alt="" className="w-full" />

        <p>{item.discount}</p>
        <h4>{item.title}</h4>
        <b>{item.price}</b>
      </div>
    ))}
  </div>
</div>
  );
};

export default Today;