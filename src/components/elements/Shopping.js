import React from "react";
import '../../css/Shopping.css';

// import { useSelector } from 'react-redux'

function Shopping(props) {

  // const loadCart = useSelector((state)=> state.reduxcart.Posts)
console.log(props);
  return (
    <div className="shopping">
      <div className="shopping_wrap">
        <div className="shopping_img">
          <img src="/images/1589778571433l0.jpg" />
        </div>
        <div className="shopping_name">
          <h3>{props.list.title}</h3>
        </div>
        <div className="shopping_price">
          <h3>{props.list.price.toLocaleString("ko-KR")}원</h3>
        </div>
        <div className="del_btn">
          <img src="/images/ico_close_999_32x32.png" />
        </div>
      </div>
      <hr className="underline" />
    </div>
  );
}
export default Shopping;
