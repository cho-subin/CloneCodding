import React from "react";
import '../../css/Shopping.css';
import axios from "axios";

// import { useSelector } from 'react-redux'

function Shopping(props) {

  const axiosDeleteitem =async()=>{
    const Token = sessionStorage.getItem("token")
    const res =await axios.delete(`http://13.209.65.84/api/cart/item/${props.list.id}`,{
      headers:{
        "Authorization" : Token
      }
    })
    console.log("axiosDeleteitem",res);
    window.alert(res.data);
    window.location.reload();
    
  }

  // const loadCart = useSelector((state)=> state.reduxcart.Posts)
  console.log(props);
  return (
    <div className="shopping">
      <div className="shopping_wrap">
        <div className="shopping_img">
          <img src={props.list.imageUrl} />
        </div>
        <div className="shopping_name">
          <h3>{props.list.title}</h3>
        </div>
        <div className="shopping_price">
          <h3>{props.list.price.toLocaleString("ko-KR")}원</h3>
        </div>
        <div className="del_btn" onClick={()=>{axiosDeleteitem();}} >
          <img src="/images/ico_close_999_32x32.png" />
        </div>
      </div>
      <hr className="underline" />
    </div>
  );
}
export default Shopping;
