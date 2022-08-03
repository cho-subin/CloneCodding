import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import {productAction} from '../../redux/actions/productAction';

function ProductCard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // let productList = [
  //     { postId: 1, title: "친환경 대추방울토마토 500g", imageUrl: '', price: "4,900원", deliveryFee: '',  salesUnit: '', weight: ''},
  //     { postId: 2, title: "국산콩 두부 150g", imageUrl: '', price: "1,900원", deliveryFee: '',  salesUnit: '', weight: ''},
  //     { postId: 3, title: "쭈꾸미 볶음 300g", price: "6,800원" },
  //     { postId: 4, title: "DOLE 실속 바나나 1kg", price: "3,330원" },
  //     { postId: 5, title: "맛있는 숙주나물 380g", price: "1,450원" },
  //   ]

  const productList = useSelector((state) => state.reduxProduct.productList);

  console.log(productList);

  // 통신할때 쓰기!
  useEffect(()=>{
    dispatch(productAction.getProducts()) //middleware로 쓰기
    // console.log(data)
  },[])

  return (
    <div className="product_card">
      <div className="product_wrap">
        {productList.map((list, index) => {
          return (
            <div className="product" onClick={() => { navigate(`/post/${list.id}`) }} key={index}>
              <div className="prod_img">
                <img src={list.image} alt="" />
              </div>
              <div className="prod_txt">
                <h2 className="prod_name">{list.title+" "+list.weight}</h2>
                <p className="prod_price">
                  <span className="discount_rate">{list.price.toLocaleString("ko-KR")}원</span>
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
