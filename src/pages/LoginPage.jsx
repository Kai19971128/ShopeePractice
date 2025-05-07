import React from "react";
// layout
import DefaultLayout from "../components/layout/DefaultLayout";
import Container from "../components/common/Container";
import Flexbox from "../components/common/Flexbox";
// layout
// Img
import login from "../Imgs/carousel/10001.jpeg";
import GoogleLogin from "../Imgs/login/QuickLogin/Google.png";
import FacebookLogin from "../Imgs/login/QuickLogin/Facebook.png";
// Img
// Pugins
import LoginForm from "../components/auth/LoginForm";   
import { Link } from "react-router-dom";
import { Divider } from "antd";
import styled from "styled-components";
// Pugins
//Auth


const StyledLoginBox = styled(Flexbox)`
    background-color: #fff;
    justify-content: center;
    width: 100%;
    height: 600px;
    box-sizing: border-box;
`
const LoginFlexbox = styled(Flexbox)`
    width: 100%; 
    max-width: 1040px;
    justify-content: space-around;
    align-items: center; 
`
const FormPage = styled(Flexbox)`
    width: 100%;
    height: 420px;
    max-width: 320px;
    padding:40px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    
    flex-direction: column;
`
const FormPageTitle = styled.h2`
    font-weight: 400;
    margin-bottom: 20px;
    color:#222222;
`
const QuickLoginContainer = styled(Flexbox)`
    width: 100%;
    justify-content: space-between;
`
const QuickLogin = styled(Flexbox)`
    width:155px;
    height: 40px;
    border: 1px solid #aaa;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    margin-bottom:30px ;
&:hover {
    background-color: #f9f9f9;
    cursor: pointer;
}
`
const QuickLoginImg = styled.img`
    margin-right: 5px;
`
const QuickLoginText = styled.p`
    font-size: 16px;
    color: #333;
`
const RegisterContainer = styled(Flexbox)`
    width: 100%;
    justify-content: center;
`
const RegisterText = styled.p`
    font-size: 14px;
    color: #aaa;
`
const RegisterButton = styled.p`
    font-size: 14px;
    color: #ff3c00;
`


const LoginPage = () => {
   
    return (
        <DefaultLayout>
            <StyledLoginBox>
                <LoginFlexbox>
                    <img src={login} alt="login" height={400} width={400}/>
                    <FormPage>
                        <FormPageTitle>登入</FormPageTitle>
                        <LoginForm></LoginForm>
                        <Link to="/"><div style={{color:"#0055AA",fontSize:"14px"}}>忘記密碼</div></Link>
                        <Divider style={{borderColor:"#aaa"}}><div style={{color:"#aaa",fontSize:"14px"}}>或</div></Divider>
                        <QuickLoginContainer>
                            <Link to="/">
                                <QuickLogin>
                                    <QuickLoginImg src={GoogleLogin} width={22} height={22} />
                                    <QuickLoginText>Google</QuickLoginText>
                                </QuickLogin>
                            </Link>
                            <Link to="/">
                                <QuickLogin>
                                    <QuickLoginImg src={FacebookLogin} width={22} height={22} />
                                    <QuickLoginText>Facebook</QuickLoginText>
                                </QuickLogin>
                            </Link>
                        </QuickLoginContainer>
                        <RegisterContainer>
                            <RegisterText>蝦皮新朋友?</RegisterText>
                            <RegisterButton>註冊</RegisterButton>
                        </RegisterContainer>
                    </FormPage>
                </LoginFlexbox>
            </StyledLoginBox>
           
        </DefaultLayout>
    );

}

export default LoginPage;
