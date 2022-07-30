import React from "react";
import './../css/Detail.css';

function Detail() {

  return (
    <div class="product_basic_info">
      <div class="container">
        <div class="img_area">
          <img src="/images/1589778571433l0.jpg" />
        </div>
        <div class="basic_info">
          <h2 class="item_name">생 모레 치즈</h2>
          <p class="sub_name">| 오직 마켓컬리에서만 |</p>
          <p class="discount_title">회원할인가</p>
          <p class="discounted_price">
            <span class="price">9,800 </span>원
          </p>
          <table class="specs_table">
            <tbody>
              <tr>
                <td>중량/용량</td>
                <td>150g</td>
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
                  <span class="item_count">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="total">
            <span>총 상품금액 : </span>
            <span>9,800</span>
            <span>원</span>
          </div>
          <div class="point_area">
            <span class="point">적립</span>
            <span>구매 시, 5원 적립</span>
          </div>
          <div class="button_grp">
            {/* <button>재입고 알림</button>
            <button>늘 사는 것</button> */}
            <button>장바구니 담기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
