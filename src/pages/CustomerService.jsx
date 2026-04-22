import React from "react";

const CustomerService = () => {
  const cards = [
    {
      title: "Your Orders",
      desc: "Track packages, Edit or cancel orders",
    },
    {
      title: "Returns and Refunds",
      desc: "Return or exchange items",
    },
        {
      title: "Manage Addresses",

      desc: "Update your addresses",
    },
         {
      title: "Manage Prime",
      desc: "View your benefits",
    },
               {
      title: "Payment Settings",

      desc: "Add or edit payment methods",
    },
        {
      title: "Account Settings",
      desc: "Change email or password",
    },
           {
      title: "Digital Services",
      desc: "Device help & support",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      
    
      <div className="space-y-3 mb-6">
        <div className="border border-orange-400
         bg-orange-50 p-3 rounded">
          ⚠️ You can view this page in your preferred language.
        </div>
        <div className="border border-orange-400
         bg-orange-50 p-3 rounded">
          ⚠️ Information on live sale events and offers.
        </div>
        <div className="border border-orange-400
         bg-orange-50 p-3 rounded">
          ⚠️ For support, refer to Customer Service FAQs.
        </div>
      </div>

      <h1 className="text-2xl font-semibold mb-6">
        Hello. What can we help you with?
      </h1>


      <h2 className="text-lg font-medium mb-4">
        Some things you can do here
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 hover:shadow-md cursor-pointer"
          >
            <h3 className="font-semibold mb-1">{card.title}

            </h3>
            <p className="text-sm text-gray-600">
                
                {card.desc}</p>
                
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default CustomerService;