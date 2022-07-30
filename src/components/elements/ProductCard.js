import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ProductCard.css"

function ProductCard() {

  const navigate = useNavigate();

  return (
    <div className="product_card">
      <div className="product_wrap">
        {/* map 여기서부터 돌려야됨 */}
        <div className="product" onClick={() => { navigate("/api/cart") }} >
          <div className="prod_img">
            <img src="/images/1589778571433l0.jpg" />
          </div>
          <div className="prod_txt">
            <h2 className="prod_name">친환경 대추방울토마토 500g</h2>
            <p className="prod_price">
              <span className="discount_rate">22%</span>
              <span className="discounted">5,444원</span>
            </p>
            <p className="origin_price">6,980원</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
