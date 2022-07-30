import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Signup = () => {

  const navigate =useNavigate();
  return (
    <Wrap>
      <Title>
        <h2>회원가입</h2>
      </Title>
      <SignupWrap>
        <p>
          <span>*</span>필수입력사항
        </p>
        <InputWrap>
          <Label>
            아이디 <span>*</span>
          </Label>
          <InputTag>
            <Input placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"></Input>
            <CheckButton >중복확인</CheckButton>
          </InputTag>
        </InputWrap>

        <InputWrap>
          <Label>
            비밀번호 <span>*</span>
          </Label>
          <InputTag>
            <Input placeholder="비밀번호를 입력해주세요"></Input>
          </InputTag>
        </InputWrap>

        <InputWrap>
          <Label>
            비밀번호확인 <span>*</span>
          </Label>
          <InputTag>
            <Input placeholder="비밀번호를 한번 더 입력해주세요"></Input>
          </InputTag>
        </InputWrap>

        <InputWrap>
          <Label>
            이름 <span>*</span>
          </Label>
          <InputTag>
            <Input placeholder="이름을 입력해주세요"></Input>
          </InputTag>
        </InputWrap>
        <SignupButtonWrap>
          <SignupButton  onClick={() => { navigate("/user/login"); }}>가입하기</SignupButton>
        </SignupButtonWrap>

      </SignupWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 1050px;
  height: 600px;
  margin: 0 auto;
  padding-top: 30px;
  // background-color: beige;
`

const Title = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 50px 0 20px;

  h2 {
    margin: 0;
    text-align: center;
  }
`;

const SignupWrap = styled.div`
  width: 640px;
  height: 30px;
  margin: 0 auto;
  p {
    text-align: right;
    padding-bottom: 10px;
    font-size: 12px;
    color: #666;
    border-bottom: 2px solid black;
  }
  span {
    padding-right: 2px;
    color: #ee6a7b;
  }
`;

const InputWrap = styled.tr`
  /* background-color: beige; */
  display: flex;
 

  
`;

const Label = styled.th`
  padding-top: 29px;
  width: 159px;
  padding: 20px 0 0 20px;
  font-weight: 700;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  vertical-align: top;
  text-align: left;
`;

const InputTag = styled.td`
  padding-top: 19px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 14px;
  border: 1px solid #ccc;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  border-radius: 3px;
  background: #fff;
  outline: none;
  vertical-align: top;
`;

const CheckButton = styled.button`
  border: 1px solid #5f0080;
  background-color: #fff;
  color: #5f0080;
  width: 115px;
  height: 40px;
  margin-left: 5px;
  border-radius: 3px;
`;

const SignupButtonWrap = styled.div`
margin-top: 30px;
 border-top:1px solid rgb(247, 247, 247);
    padding-top: 40px;
    text-align: center;
`;

const SignupButton = styled.button`
        width: 210px;
    height: 50px;
    font-size: 16px;
    border: 1px solid #5f0081;
    background-color: #5f0080;
    color: #fff;
    border-radius: 5px;
`;

export default Signup;
