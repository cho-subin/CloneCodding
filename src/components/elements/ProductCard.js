import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ProductCard.css"

function ProductCard({cardList}) {

  const navigate = useNavigate();

  return (
    <div className="product_card">
      <div className="product_wrap">
        {cardList.list.map((list,index) => {
          return (
            <div className="product" onClick={() => { navigate(`/post/${list.postId}`) }} >
              <div className="prod_img">
                <img src="/images/1589778571433l0.jpg" />
              </div>
              <div className="prod_txt">
                <h2 className="prod_name">{list.title}</h2>
                <p className="prod_price">
                  <span className="discount_rate">{list.price}</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default ProductCard;
