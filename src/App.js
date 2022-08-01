import React from "react";
import './App.css';
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
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/post/:postId" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;