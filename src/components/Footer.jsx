import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-white mt-10">

      
      <div className="text-center py-3 bg-gray-700 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0,
             behavior: "smooth" })}
      >
        Back to top
      </div>

     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 text-sm">

        <div>
       <h3 className="font-bold mb-2">Get to Know Us</h3>
          <p onClick={() => navigate("/about")} 
          className="cursor-pointer hover:underline">About</p>

          <p onClick={() => navigate("/careers")}
           className="cursor-pointer hover:underline">Careers</p>

          <p onClick={() => navigate("/press")}

           className="cursor-pointer hover:underline">Press</p>

        </div>

        <div>
          <h3 className="font-bold mb-2">Connect with Us</h3>

          <p onClick={() => navigate("/facebook")}

           className="cursor-pointer 
           hover:underline">Facebook</p>

          <p onClick={() => navigate("/twitter")} 
          className="cursor-pointer hover:underline">Twitter</p>

          <p onClick={() => navigate("/instagram")} 

          className="cursor-pointer hover:underline">Instagram</p>

        </div>

        <div>
          <h3 className="font-bold mb-2">Make Money with Us</h3>

           <p onClick={() => navigate("/sell")}

           className="cursor-pointer hover:underline">Sell Products</p>

          <p onClick={() => navigate("/affiliate")} 


          className="cursor-pointer hover:underline">Affiliate</p>

           <p onClick={() => navigate("/advertise")} 

          className="cursor-pointer hover:underline">Advertise</p>

        </div>

        <div>
          <h3 className="font-bold mb-2">Let Us Help You</h3>

          <p onClick={() => navigate("/account")}

            className="cursor-pointer hover:underline">Your Account</p>

          <p onClick={() => navigate("/returns")} 

          className="cursor-pointer hover:underline">Returns</p>

           <p onClick={() => navigate("/help")} 

                className="cursor-pointer hover:underline">Help</p>

        </div>

      </div>


      <div className="text-center text-xs py-4 border-t border-gray-600">
        © 2026  amazon.com inc.or its affiliates
      </div>

    </div>
  );
}

export default Footer;