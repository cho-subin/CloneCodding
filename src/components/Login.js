import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  return (
    <div>
      <LoginWrap>
          <h3>로그인</h3>
          <InputId placeholder='아이디를 입력해주세요'></InputId>
          <InputPw placeholder='비밀번호를 입력해주세요'></InputPw>
          <LoginButton  onClick={() => { navigate("/"); }}>로그인</LoginButton>
          <SignupButton onClick={() => { navigate("/user/signup"); }} >회원가입</SignupButton>
      </LoginWrap>
    </div>
  )
}

const LoginWrap =styled.div`
    width: 340px;
    margin: 0 auto ;
    padding-top: 90px;
    /* background-color: aliceblue; */
    h3{
      font-weight: 800;
    font-size: 20px;
    text-align: center;
    
    }
`;

const InputId =styled.input`
   width: 100%;
    height: 54px;
    padding: 0 19px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #fff;
    font-size: 14px;
    box-sizing: border-box;
    margin: 25px 0 10px;
`;

const InputPw =styled.input`
   width: 100%;
    height: 54px;
    padding: 0 19px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #fff;
    font-size: 14px;
    box-sizing: border-box;
    margin-bottom :10px;
`;

const LoginButton =styled.button`
   width: 100%;
    height: 54px;
    border-radius: 3px;
    font-size: 14px;
    box-sizing: border-box;
    margin:20px 0 10px;
    border: 1px solid #5f0081;
    background-color: #5f0080;
    color: white
`;

const SignupButton =styled.button`
   width: 100%;
    height: 54px;
    border-radius: 3px;
    font-size: 14px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border: 1px solid #5f0081;
    background-color: white;
    color: #5f0080;
`;

export default Login