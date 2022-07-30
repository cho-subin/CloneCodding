import React from "react";
import '../../css/Shopping.css';

function Shopping() {

  return (
    <div className="shopping">
      <div className="shopping_wrap">
        <div className="shopping_img">
          <img src="/images/1589778571433l0.jpg" />
        </div>
        <div className="shopping_name">
          <h3>친환경 대추방울토마토</h3>
        </div>
        <div className="shopping_price">
          <h3>5,444원</h3>
        </div>
        <div className="del_btn">
          <img src="/images/ico_close_999_32x32.png" />
        </div>
      </div>
      <hr className="underline"/>
    </div>
  );
}
export default Shopping;
