import React from "react";
import styled from "styled-components";
import Container from "../common/container";
import Flexbox from "../common/Flexbox";
import { Link } from "react-router-dom";
import logistic1 from "../../Imgs/logistic/image1.svg"
import logistic2 from "../../Imgs/logistic/image2.svg"
import logistic3 from "../../Imgs/logistic/image3.svg"
import logistic4 from "../../Imgs/logistic/image4.svg"
import logistic5 from "../../Imgs/logistic/image5.svg"
import logistic6 from "../../Imgs/logistic/image6.svg"
import logistic7 from "../../Imgs/logistic/image7.svg"
import logistic8 from "../../Imgs/logistic/image8.svg"
import logistic9 from "../../Imgs/logistic/image9.svg"
import  QRCodeImg  from "../../Imgs/download/10001.png";
import AppStore from "../../Imgs/download/10002.png"
import GooglePlay from "../../Imgs/download/10003.png"


const FooterWrapper = styled.footer`
   width: 100vw;
   min-height: 100px;
   background-color: #fbfbfb;
   padding:40px 0 20px 0;
`;
const FooterColumn = styled.div`
    width: 33.333%;
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
        width: 20%;
    }
    a{
        margin-bottom: 4px;
        color: rgba(0, 0, 0, 0.54);
    }
`
const FooterColumnTitle = styled.h4`
    font-weight: bold;
    margin-bottom: 12px;
`
const StyleLi = styled.li`
    padding: 0 5px;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin: 0 8px 8px 0;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <Flexbox 
                wrap="wrap"
                >
                    <FooterColumn>
                        <Flexbox direction="column">
                        <FooterColumnTitle>客服中心</FooterColumnTitle>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        <Link to="/">蝦皮購物</Link>
                        </Flexbox>
                    </FooterColumn>
                    <FooterColumn>
                        <Flexbox direction="column">
                            <FooterColumnTitle>關於蝦皮</FooterColumnTitle>
                            <Link to="/">蝦皮購物</Link>
                            <Link to="/">蝦皮購物</Link>
                            <Link to="/">蝦皮購物</Link>
                            <Link to="/">蝦皮購物</Link>
                            <Link to="/">蝦皮購物</Link>
                            <Link to="/">蝦皮購物</Link>
                        </Flexbox>
                    </FooterColumn>
                    <FooterColumn>
                        <Flexbox direction="column">
                            <FooterColumnTitle>物流合作</FooterColumnTitle>
                            <Flexbox as="ul" wrap="wrap">
                                <StyleLi><img src={logistic1} width={50} alt="logistic1" /></StyleLi>
                                <StyleLi><img src={logistic2} width={50} alt="logistic2" /></StyleLi>
                                <StyleLi><img src={logistic3} width={50} alt="logistic3" /></StyleLi>
                                <StyleLi><img src={logistic4} width={50} alt="logistic4" /></StyleLi>
                                <StyleLi><img src={logistic5} width={50} alt="logistic5" /></StyleLi>
                                <StyleLi><img src={logistic6} width={50} alt="logistic6" /></StyleLi>
                                <StyleLi><img src={logistic7} width={50} alt="logistic7" /></StyleLi>
                                <StyleLi><img src={logistic8} width={50} alt="logistic8" /></StyleLi>
                            </Flexbox>
                            <FooterColumnTitle>蝦皮24h包裝減量標章</FooterColumnTitle>
                            <Flexbox as="ul" wrap="wrap">
                                <StyleLi><img src={logistic9} width={50} alt="logistic8" /></StyleLi>
                            </Flexbox>
                        </Flexbox>
                    </FooterColumn>
                    <FooterColumn>
                        <Flexbox direction="column">
                            <FooterColumnTitle>關注我們</FooterColumnTitle>
                        </Flexbox>
                        <Flexbox direction="column">
                            <Link to="/">蝦皮購物</Link>
                            <Link to="/">蝦皮購物</Link>
                            <Link to="/">蝦皮購物</Link>
                            <Link to="/">蝦皮購物</Link>
                            <Link to="/">蝦皮購物</Link>
                        </Flexbox>
                    </FooterColumn>
                    <FooterColumn>
                        <Flexbox direction="column">
                            <FooterColumnTitle>下載連結</FooterColumnTitle>
                            <Flexbox as="ul" >
                                <StyleLi as="a" href="#!" ><img src={QRCodeImg} alt="QRCodeImg" width={88}/></StyleLi>
                                <Flexbox as="ul" direction="column">
                                    <StyleLi as="a" href="#!" ><img src={AppStore} alt="appStore" width={76} /></StyleLi>
                                    <StyleLi as="a" href="#!" ><img src={GooglePlay} alt="googlePlay" width={76} /></StyleLi>
                                </Flexbox>
                            </Flexbox>
                        </Flexbox>
                    </FooterColumn>
                </Flexbox>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;