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

  // Main ProductCard와 Detail 정보
  const [productApiId, setProductApiId] = React.useState({
    postId:''
  });

  let cardList = {
    list: [
      { postId: 1, title: "친환경 대추방울토마토 500g", price: "4,900원" },
      { postId: 2, title: "국산콩 두부 150g", price: "1,900원" },
      { postId: 3, title: "쭈꾸미 볶음 300g", price: "6,800원" },
      { postId: 4, title: "DOLE 실속 바나나 1kg", price: "3,330원" },
      { postId: 5, title: "맛있는 숙주나물 380g", price: "1,450원" },
    ]
  }

  console.log(productApiId);

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Main cardList={cardList}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/post/:postId" element={<Detail/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;