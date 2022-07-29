import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/elements/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Footer from "./components/elements/Footer";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/login" element={<Login/>} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/api/post" element={<Detail />} />
          <Route path="/api/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App;