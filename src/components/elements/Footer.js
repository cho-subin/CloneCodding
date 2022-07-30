import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div>
    <FooterWrap>
      <InfoWrap>
        <LeftBox>
          <h2>고객행복센터</h2>
          <div className='boxwrap'>
            <h1>1664-1107</h1>
            <Div>
              <dt>365고객센터</dt>
              <dd>오전 7시 - 오후 7시</dd>
            </Div>
          </div>

          <div className='boxwrap'>
            <button>카카오톡 문의</button>
            <Div>
              <dt>365고객센터</dt>
              <dd>오전 7시 - 오후 7시</dd>
            </Div>
          </div>

          <div className='boxwrap'>
            <button>1:1 문의</button>
            <Div>
              <dt>24시간 접수 가능</dt>
              <dd>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</dd>
            </Div>
          </div>

          <div className='boxwrap'>
            <button>대량주문 문의</button>
            <Div>
              <dd>비회원의 경우 메일로 문의 바랍니다.</dd>
            </Div>
          </div>
        </LeftBox>


        <RightBox>
          <ul>
            <li>컬리소개</li>
            <li>컬리소개영상</li>
            <li>인재채용</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>이용안내</li>
          </ul>
          법인명 (상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-23567 사업자정보 확인<br/>
          통신판매업 : 제 2018-서울강남-01646 호 | 개인정보보호책임자 : 이원준<br/>
          주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 : 김슬아<br/>
          입점문의 : 입점문의하기 | 제휴문의 : business@kurlycorp.com<br/>
          채용문의 : recruit@kurlycorp.com<br/>
          팩스: 070 - 7500 - 6098 | help@kurlycorp.com<br/>
          대량주문 문의 : kurlygift@kurlycorp.com<br/>
          <IconWrap>
            <Icon><img src="/images/ico_instagram.png"/></Icon>  
            <Icon><img src="/images/ico_fb.png"/></Icon> 
            <Icon><img src="/images/ico_blog.png" /></Icon>  
            <Icon><img src="/images/ico_naverpost.png" /></Icon>  
            <Icon><img src="/images/ico_youtube.png" /></Icon>
          </IconWrap>
        </RightBox>
      </InfoWrap>
      
      <IconinfoWrap>
    <div>
      <img src="/images/logo_isms.png"/>
      <p>[인증범위] 마켓컬리 쇼핑몰 서비스 개발·운영<br/>
      [유효기간] 2022.01.19 ~ 2025.01.18</p>
    </div>
    <div>
    <img src="/images/logo_eprivacyplus.png"/>
      <p>개인정보보호 우수 웹사이트 ·<br/>
      개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
    </div>
    <div className='last'>
    <img className='payments' src="/images/logo_payments.png"/>
      <p >고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한<br/>
      토스페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.</p>
    </div>

  </IconinfoWrap>
  <BottomWrap>
  <p>마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.</p>
    <p>마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
    <p>© KURLY CORP. ALL RIGHTS RESERVED</p>
  </BottomWrap>
    

    </FooterWrap>
    
  </div>
  )
}

const FooterWrap = styled.div`
  width: 100%;
  height: 80px;
  position : absolute;
  bottom : 0;
  /* display: flex; */
  justify-content: center;
  /* border : 1px solid black; */
  border-top:1px solid rgb(247, 247, 247);
`;

const InfoWrap = styled.div`
  width: 1050px;
  margin : 0px auto;
  padding-bottom: 24px;
  /* background-color: aliceblue; */
  display: flex;
  /* rgb(247, 247, 247) */
`;

const LeftBox = styled.div`
box-sizing: border-box;
margin:0;
  float : left;
  width : 534px;
  /* background-color: aqua; */
  h2{
    padding: 29px 0px 6px;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
  }
  h1{
    /* display: block; */
    width: 140px;
    margin-right: 16px;
    margin-bottom: 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: -0.5px;

  }
  button{
    display: block;
    width: 140px;
    height: 40px;
    margin: 3px 16px 0px 0px;
    border: 1px solid rgb(227, 227, 227);
    border-radius: 3px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    background-color: transparent;
  }
  div.boxwrap{
    display: flex;
    padding-top: 16px;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    line-height: 22px;
  }
  
  dd{
    color:rgb(153, 153, 153);
    margin-left: 0;
    font-size: 10px;
  }
`;

const Div =styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0;
  box-sizing: border-box;
  justify-content: center;
  height: 100%;
`;

// const Divv =styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-left: 0;
//   box-sizing: border-box;
//   justify-content: flex-start;
  
// `;

const RightBox = styled.div`
  padding-top:20px;
  /* background-color : blue; */
  color : #999;
  font-size: 12px;
    color: rgb(153, 153, 153);
    line-height: 20px;
    ul{
      display: flex;
      width :100%;
      padding-bottom: 29px;
      padding: 0;
      color:black;
      list-style-type: none;
    }
    li{
      padding-right: 16px;
      font-size: 14px;
    }
  
`;

const IconWrap = styled.div`
  float:left;
  padding-top: 45px;
`;

const Icon = styled.div`
  display: block;
  margin-right: 10px;
  float: left;
  img{
    width: 30px;
    height:30px;
  }
`;

const IconinfoWrap = styled.div`
    width: 1050px;
    margin: 0px auto;
    display: flex;
    justify-content: flex-start;
    padding: 20px 0px 24px;
    border-top: 1px solid rgb(238, 238, 238);
    
  div{
    width: 267px;
    display: flex;
  }
  div.last{
    width: 428px;
    display: flex;
  }
  img{
    width: 34px;
    height: 34px;
    margin-right: 10px;
  }
  img.payments{
    width: 104px;
    height: 34px;
    margin-right: 10px;
  }
  p{
    font-size: 10px;
    color: rgb(153, 153, 153);
    line-height: 16px;
    letter-spacing: -0.5px;
    margin: 0;
  }
  

`;

const BottomWrap = styled.div`
    background-color: rgb(247, 247, 247);
    padding: 19px 0px 27px;
    p{
      font-size: 10px;
    line-height: 16px;
    color: rgb(153, 153, 153);
    letter-spacing: -0.5px;
    display: flex;
    justify-content: center;
    margin: 0;
    }
`;

export default Footer;