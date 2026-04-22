import React from "react";

const Sell = () => {
  return (
    <div className="font-sans">


      <section className="flex items-center justify-between px-10 py-16 bg-gray-100">
     
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">

            ZERO referral fee on over{" "}
            <span className="text-pink-500">12.5 crore products</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Register with a valid GSTIN and an active bank account to become an Amazon.in seller.
          </p>

          <button className="mt-8 px-8 py-3 bg-blue-500 text-white text-lg rounded-full shadow hover:bg-orange-600 transition">
            Start Selling
          </button>
        </div>


        <div>
          <img
            src="https://m.media-amazon.com/images/G/31/amazonservices/KV_3_Electronic_Gadg_SellerFeesLive_Now2026.webp"
            alt="seller"
            className="w-[400px]"
          />
        </div>
      </section>


      <section className="bg-[#0f1a24] text-white py-16 px-10 text-center">
        
        <h2 className="text-4xl font-bold mb-12">Fee Drop Highlights</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          
          <div>
            <p className="text-orange-500 text-xl font-bold">Zero</p>
            <p className="mt-2">Zero Referral Fee (Under ₹1000)</p>
          </div>

          <div>
            <p className="text-orange-500 text-xl font-bold">₹15</p>
            <p className="mt-2">Save ₹15 per order</p>
          </div>

          <div>
            <p className="text-orange-500 text-xl font-bold">4%-9.5%</p>
            <p className="mt-2">Lower Fees</p>
          </div>

          <div>
            <p className="text-orange-500 text-xl font-bold">₹20-₹26</p>
            <p className="mt-2">Lower Closing Fees</p>
          </div>
        </div>

        <button className="mt-10 px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-gray-200 transition">
          Know more
        </button>
      </section>

<section className="bg-gray-100 py-16 px-10 text-center">
  <h2 className="text-4xl font-bold mb-12">
    Big savings with the new fee reductions
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

    {[
      { name: "Saree", price: "₹299",
         img: " https://i.pinimg.com/1200x/fc/c5/a3/fcc5a336c7893e2d57989ecd3aa2743f.jpg" },
      { name: "Oil", price: "₹249", 
        img: "https://i.pinimg.com/736x/2e/53/d7/2e53d7ac43f6d2cc512504af3543f640.jpg" },
      { name: "Cushion", price: "₹800",
          img: "https://i.pinimg.com/736x/c5/fc/40/c5fc409ed6a1b5f6973ff1b18fbcdcf7.jpg" },
      { name: "Power Bank", price: "₹999", 
        img: "https://i.pinimg.com/736x/a0/c7/14/a0c7148a910fcb264e169a055ad7fba9.jpg" },
      { name: "Shoes", price: "₹700", 
        img: "https://i.pinimg.com/1200x/4a/26/01/4a2601c73c01428a21431aefd44af165.jpg" },
      { name: "Jacket", price: "₹999",
         img: "https://i.pinimg.com/736x/dd/de/14/ddde149b1134c4387cd174a99b8d2e31.jpg" },
      { name: "Drone", price: "₹999", 
        img: "https://i.pinimg.com/1200x/36/e0/78/36e078d7ff3f8c99a0168d99d4d7f1d6.jpg" },
      { name: "Headphones", price: "₹950", 
        img: "https://i.pinimg.com/736x/67/2a/2e/672a2eca2b68c1ab9d960e8a864e3e17.jpg" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-50 object-cover rounded-md"
        />

        <h3 className="mt-4 font-semibold text-lg">{item.name}</h3>

        <p className="text-orange-500 font-bold mt-1">{item.price}</p>

        <button className="mt-3 bg-green-600 text-white px-4 py-1 rounded-full text-sm">
          Save ₹100 / unit
        </button>
      </div>
    ))}
  </div>

  <button className="mt-12 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
    Check revised fees across all categories
  </button>
</section>
    </div>
    
  );
};

export default Sell;