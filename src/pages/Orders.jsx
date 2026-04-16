import React from "react";

const Orders = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px] text-center">
        
        <h1 className="text-2xl font-bold mb-2">Sign In</h1>
        
        <p className="text-gray-500 mb-6">or Create New Account</p>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-3 outline-none focus:ring-2 focus:ring-blue-400"
        />

       
        <input
          type="tel"
          placeholder="Enter Mobile Number"
          className="w-full border p-3 rounded-lg mb-5 outline-none focus:ring-2 focus:ring-blue-400"
        />


        <button className="w-full bg-blue-500 text-white py-3 rounded-lg
         hover:bg-blue-600 transition">
          Continue
        </button>

 
        <p className="text-sm text-gray-500 mt-6">
          Buy for work?{" "}
          <span className="text-blue-500 cursor-pointer">
            Create a new account
          </span>
        </p>

      </div>
    </div>
  );
};

export default Orders;