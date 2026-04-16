import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between bg-[#131921] text-white px-4 py-2">

      
      <img
        src="https://static.startuptalky.com/2022/06/Amazon-StartupTalky.jpg"
        alt="amazon"
        className="w-30 h-20 object-contain cursor-pointer"

        onClick={() => navigate("/")}
      />

      <div className="flex w-[40%]">
        <input type="text" placeholder="Search Amazon"

          className="w-full px-3 py-2 text-black rounded-l-md"
        />
        <button className="bg-yellow-400 px-4 rounded-r-md">
          
        </button>
      </div>


      <div className="flex gap-6 text-sm">

        <div  onClick={() => navigate("/login")}
          className="cursor-pointer hover:border border-green p-1"
        >





          <p>Hello, Sign in</p>
          <p className="font-bold">Account and Lists</p>

        </div>

        <div
          onClick={() => navigate("/orders")}

          className="cursor-pointer hover:border border-white p-1"
        >
          <p>Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="cursor-pointer font-bold hover:border border-white p-1"
        >
          🛒 Cart
        </div>

      </div>
    </div>
  );
}

export default Navbar;