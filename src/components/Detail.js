import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './../css/Detail.css';
import {useNavigate} from "react-router-dom"

function Detail() {

  const params = useParams();

  const navigate =useNavigate();

  const [detailData,setDetailData]=useState({});

  const productList = useSelector((state)=>state.reduxProduct.productList);

  console.log(productList);
  
  sessionStorage.getItem("token");

  // useEffect(()=>{
  //   setDetailData(productList);
  // },[])

  return (
    <div className="product_basic_info">
      <div className="container">
        <div className="img_area">
          <img src="/images/1589778571433l0.jpg" />
        </div>
        <div className="basic_info">
          <h2 className="item_name">{detailData[0].title}</h2>
          <p className="sub_name">| 오직 마켓컬리에서만 |</p>
          <p className="discount_title">회원할인가</p>
          <p className="discounted_price">
            <span className="price">{detailData[0].price} </span>원
          </p>
          <table className="specs_table">
            <tbody>
              <tr>
                <td>중량/용량</td>
                <td>{detailData.price}</td>
              </tr>
              <tr>
                <td>배송구분</td>
                <td>샛별배송/택배배송</td>
              </tr>
              <tr>
                <td>판매자</td>
                <td>마켓컬리</td>
              </tr>
              <tr>
                <td>포장타입</td>
                <td>
                  냉장/종이포장
                  <p>택배배송은 에코포장이 스티로폼으로 대체됩니다.</p>
                </td>
              </tr>
              {/* <tr>
                <td>알레르기정보</td>
                <td>-우유함유</td>
              </tr> */}
              <tr>
                <td>보증 유통기한</td>
                <td>최소 14일 이상 남아있는 제품을 발송해드립니다.</td>
              </tr>
              <tr>
                <td>구매수량</td>
                <td>
                  <span className="item_count">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="total">
            <span>총 상품금액 : </span>
            <span>9,800</span>
            <span>원</span>
          </div>
          <div className="point_area">
            <span className="point">적립</span>
            <span>구매 시, 5원 적립</span>
          </div>
          <div className="button_grp">
            {/* <button>재입고 알림</button>
            <button>늘 사는 것</button> */}

      {(sessionStorage.getItem("token")) ?
                                (
                                  <button onClick={() => {
                                    navigate("/cart");
                                }}>장바구니 담기</button>
                                
                                ) : (
                                  <button onClick={() => {
                                    window.alert("로그인 후 이용 가능합니다!");
                                }}>장바구니 담기</button>
                                )}  

            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
