import React, { useEffect } from "react";
import "../css/Cart.css";
import Shopping from "./elements/Shopping";
import { useDispatch } from "react-redux";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { viewCartDB } from "../redux/modules/reduxcart";

function Cart() {
  const dispatch = useDispatch();

  const navigate = useNavigate();



  useEffect(()=>{
    dispatch(viewCartDB())
  },[]);

  const loadCart = useSelector((state) => state.reduxcart.cart_list);

  console.log(loadCart);


  const axiosDeleteall =async()=>{
    const Token= sessionStorage.getItem("token");
    const ros =await axios.delete("http://13.209.65.84/api/cart",
    {headers :{
      "Authorization":Token
    }
    })
    console.log("axiosDeleteall",ros);
    window.alert(ros.data);
    window.location.reload();
    return ros
  }

  return (
    <div className="cart">
      <div className="cart_title">
        <h1>장바구니</h1>
      </div>
      <div className="cart_wrap">
        <div className="choice_list">
          <div className="choice_btn">
            <img src="/images/cart_click_btn.png" />
          </div>
          <div className="choice_all">
            {/* &nbsp; : 한칸 띄우기(중복사용 가능) */}
            <h3>
              전체선택 (0/1) <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            </h3>
          </div>
          <div className="cart_list" onClick={() => {axiosDeleteall()}}>
            <h3 >전체삭제</h3>
          </div>
        </div>
        <hr />
        {/* 매핑 */}
        {loadCart.posts.map((item, index) => {
          return <Shopping list={item} key={index} />;
        })}
      </div>
      <div className="cart_wrap_right">
        <div className="price_wrap">
          <div className="total_price">
            <h1>상품금액</h1>
            <h1>{loadCart.totalPrice.toLocaleString("ko-KR")}원</h1> 
          </div>
          <div className="delivery_fee">
            <h1>배달비</h1>
            <h1>{loadCart.deliveryFee.toLocaleString("ko-KR")}원</h1>
          </div>
          <div className="expected_payment">
            <h1>결제예정금액</h1>
            <h1>{(loadCart.deliveryFee+loadCart.totalPrice).toLocaleString("ko-KR")}원</h1>
          </div>
          <div className="payment">
            <button >주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
