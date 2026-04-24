import { NavLink } from "react-router-dom";

function Navbar2() {
  return (
    <nav className="bg-[#232f3e] text-white px-4 py-2 flex items-center gap-5 text-sm overflow-x-auto">

      <NavLink to="/" className={({isActive}) => isActive ? 
      "text-yellow-400" : ""}>All</NavLink>

      <NavLink to="/fresh" className={({isActive}) => isActive ? 
      "text-yellow-400" : ""}>Fresh</NavLink>

      <NavLink to="/mxplayer" className={({isActive}) => isActive ?
                           
                           
       "text-yellow-400" : ""}>MX Player</NavLink>

                
                <NavLink to="/sell" className={({isActive}) => isActive ? 

      "text-yellow-400" : ""}>Sell</NavLink>
      
      <NavLink to="/bestsellers" className={({isActive}) => isActive ? 
      "text-yellow-400" : ""}>Bestsellers</NavLink>
      <NavLink to="/mobiles" className={({isActive}) => isActive ?
      
      "text-yellow-400" : ""}>Mobiles</NavLink>
      <NavLink to="/deals" className={({isActive}) => isActive ? 
      "text-yellow-400" : ""}>Today's Deals</NavLink>
      <NavLink to="/service" className={({isActive}) => isActive ?
       "text-yellow-400" : ""}>Customer Service</NavLink>
      <NavLink to="/new" className={({isActive}) => isActive ? 
      "text-yellow-400" : ""}>
        New Releases</NavLink>
      <NavLink to="/prime" className={({isActive}) => isActive ?
       "text-yellow-400" : ""}>Prime
       </NavLink>
      <NavLink to="/fashion" className={({isActive}) => isActive ? 
      "text-yellow-400" : ""}>Fashion</NavLink>
       
       <NavLink to="/electronics" className={({isActive}) => isActive ? 
      "text-yellow-400" : ""}>Electronics</NavLink>
      
      <NavLink to="/pay" className={({isActive}) => isActive ? 
      "text-yellow-400" : ""}>Amazon Pay</NavLink>

      <div className="ml-auto">
        <span className="bg-yellow-400 text-black px-3 py-1 rounded">
          Prime
        </span>
      </div>

    </nav>
  );
}

export default Navbar2;