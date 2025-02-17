import "./styles/App.css";
import React from "react";
import {BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./component/navbar";
import Home from "./pages/Home";
import Collections from "./pages/collection";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Payment from "./pages/payment"
import Success from "./pages/success";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


function AppContent(){
  const location = useLocation();
  const noNavbarRoutes = ["/login", "/signup", "/"];
 return(
 
    
    <div className="App">
    {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/collection" element={<Collections/>}></Route>
      <Route path="/item/:id" element={<Shop/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/payment" element={<Payment />} />
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
  
    </Routes>
    </div>
 
  
);
}
 
export default App;

