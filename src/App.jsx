import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Sell from "./pages/Sell";
import Bestsellers from "./pages/Bestsellers";
import CustomerService from "./pages/CustomerService";
import NewReleases from "./pages/NewReleases";
import Prime from "./pages/Prime";
import Fashion from "./pages/Fashion";
import Electronics from "./pages/Electronics";
import Pay from "./pages/Pay";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/sell" element={<Sell />} />
<Route path="/bestsellers" element={<Bestsellers />} />
<Route path="/service" element={<CustomerService />} />
<Route path="/new" element={<NewReleases />} />
<Route path="/prime" element={<Prime />} />
<Route path="/fashion" element={<Fashion />} />
<Route path="/electronics" element={<Electronics />} />
<Route path="/pay" element={<Pay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;