import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Carousel } from 'antd';    
import DefaultLayout from "../components/layout/DefaultLayout";
import Clearfix from "../components/common/clearfix";
import Footer from "../components/layout/footer";
import Flexbox from "../components/common/Flexbox";
import Container from "../components/common/Container";
import AuthContext from "../components/auth/AuthContext";
import ProductCard from "../components/common/product/ProductCard";
import PopoutModal from "../components/common/PopoutModal";
import carousel1 from "../../src/Imgs/carousel/10001.jpeg";
import carousel2 from "../../src/Imgs/carousel/10002.jpeg";
import carousel3 from "../../src/Imgs/carousel/10003.jpeg";
import banner1 from "../../src/Imgs/banner/10001.png";
import banner2 from "../../src/Imgs/banner/10002.png";
import banner3 from "../../src/Imgs/banner/10003.png";


const StyledLink = styled(Link)`
    display: flex;
    width: 100%;
`;

const BannerCarouselContainer = styled.div`
    width: 66.67%;
   @media screen and (max-width: 768px) {
    width: 100%;
   }

`;
const BannerCarouselFlexbox = styled(Flexbox)`
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    flex-direction: row;
    height: 210px;
    gap: 5px;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 315px;
    }
`;
const BannerContainerFlexbox = styled(Flexbox)`
    flex-direction: column;
    width: 33.33%;
    height: 210px;
    justify-content: space-between;
    
    overflow: hidden;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 105px;
        margin: 0;
        gap: 5px;
    }
`;
const BannerFeatureContainer = styled(Flexbox)`
    max-width: 1200px;
    margin: 0 auto 24px auto;
    justify-content: space-around;
    background-color: #fff;
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
`;
const ProductCollectionContainer = styled(Flexbox)`
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 48px;
`
const ProductContainer = styled.div`
    width: calc(16.66% - 4px);
    margin-bottom:12px ;
    
    
    @media screen and (max-width: 768px) {
        width: calc(20% - 4px);
    }
    @media screen and (max-width: 576px) {
        width:calc(50% - 4px);
    }
`

const Image = styled.img`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "102.5px"};
    object-fit: cover;
    object-position: center;
    margin: auto;
    `
const Title = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
`;
const SubTitle = styled.p`
    font-size: 14px;
    color: #666;
`;

const ManualWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-top: solid 1px #f0f0f0;
   border-bottom: solid 1px #f0f0f0;
   padding: 32px 0;
`;
const ManualTitle = styled.h2`
    font-size: 24px;
    color: #555;
    margin: 0 0 16px 0;
 `   
const ManualSubTitle = styled.h3`
    font-size: 20px;
    color: #555;
    margin: 0 0 16px 0;
 `
 const ManualText = styled.p`
    font-size: 16px;
    color: #aaaaaa;
    margin: 0 0 16px 0;
 `

const HomePage = () => {
    const {isAuthenticated} = React.useContext(AuthContext);
    return (
        <DefaultLayout fixedHeader="true">
            <PopoutModal/>
            <Clearfix $height="200px"/>
            {isAuthenticated? (<h1>歡迎回來</h1>):(<h1>請先登入</h1>)}
            <BannerCarouselFlexbox> {/* banner */}
                <BannerCarouselContainer>
                    <Carousel autoplay autoplaySpeed={3000} height="210px"> 
                        <Link to="/P001"><Image src={carousel1} alt="carousel1" height="210px"/></Link>
                        <Link to="/P002"><Image src={carousel2} alt="carousel2" height="210px"/></Link>
                        <Link to="/P003"><Image src={carousel3} alt="carousel3" height="210px"/></Link>
                    </Carousel>
                </BannerCarouselContainer>
                <BannerContainerFlexbox>
                    <StyledLink to="/P004"><Image  src={carousel1} alt="carousel1"/></StyledLink>
                    <StyledLink to="/P005"><Image  src={carousel2} alt="carousel2"/></StyledLink>
                </BannerContainerFlexbox>
            </BannerCarouselFlexbox>
            <BannerFeatureContainer>
                <Flexbox align="center" >{/*banner Feature*/}
                    <Image src={banner1} alt="banner1" width="40px" height="40px"/>
                    <Flexbox direction="column" margin="10px 0 0 10px" align="start">
                        <Title>15天鑑賞期</Title>
                        <SubTitle>首推15天鑑賞期，延長買家鑑賞時間</SubTitle>
                    </Flexbox>
                </Flexbox>
                <Flexbox align="center">
                    <Image src={banner2} alt="banner2" width="40px" height="40px"/>
                    <Flexbox direction="column" margin="10px 0 0 10px" align="start">
                        <Title>15天鑑賞期</Title>
                        <SubTitle>首推15天鑑賞期，延長買家鑑賞時間</SubTitle>
                    </Flexbox>
                </Flexbox>
                <Flexbox align="center">
                    <Image src={banner3} alt="banner3" width="40px" height="40px"/>
                    <Flexbox direction="column" margin="10px 0 0 10px" align="start">
                        <Title>15天鑑賞期</Title>
                        <SubTitle>首推15天鑑賞期，延長買家鑑賞時間</SubTitle>
                    </Flexbox>
                </Flexbox>
            </BannerFeatureContainer>
            <Flexbox justify="center" maxwidth="1200px" margin="0 auto 48px auto">
                <StyledLink to="/P006" >
                    <Image src={carousel2} alt="banner1" width="100%" height="100px" />
                </StyledLink>
            </Flexbox>
            <ProductCollectionContainer>
                <ProductContainer>
                    <Link to="/P001">
                    <ProductCard title="test" coverUrl={carousel1} salePrices={[100]} listPrices={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P002">
                    <ProductCard title="test" coverUrl={carousel2} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P003">   
                    <ProductCard title="test" coverUrl={carousel3} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P001">
                    <ProductCard title="test" coverUrl={carousel1} salePrices={[100]} listPrices={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P002">
                    <ProductCard title="test" coverUrl={carousel2} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P003">   
                    <ProductCard title="test" coverUrl={carousel3} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P001">
                    <ProductCard title="test" coverUrl={carousel1} salePrices={[100]} listPrices={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P002">
                    <ProductCard title="test" coverUrl={carousel2} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P003">   
                    <ProductCard title="test" coverUrl={carousel3} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P001">
                    <ProductCard title="test" coverUrl={carousel1} salePrices={[100]} listPrices={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P002">
                    <ProductCard title="test" coverUrl={carousel2} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P003">   
                    <ProductCard title="test" coverUrl={carousel3} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P001">
                    <ProductCard title="test" coverUrl={carousel1} salePrices={[100]} listPrices={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P002">
                    <ProductCard title="test" coverUrl={carousel2} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P003">   
                    <ProductCard title="test" coverUrl={carousel3} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P001">
                    <ProductCard title="test" coverUrl={carousel1} salePrices={[100]} listPrices={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P002">
                    <ProductCard title="test" coverUrl={carousel2} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P003">   
                    <ProductCard title="test" coverUrl={carousel3} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P001">
                    <ProductCard title="test" coverUrl={carousel1} salePrices={[100]} listPrices={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P002">
                    <ProductCard title="test" coverUrl={carousel2} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P003">   
                    <ProductCard title="test" coverUrl={carousel3} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P001">
                    <ProductCard title="test" coverUrl={carousel1} salePrices={[100]} listPrices={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P002">
                    <ProductCard title="test" coverUrl={carousel2} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P003">   
                    <ProductCard title="test" coverUrl={carousel3} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P001">
                    <ProductCard title="test" coverUrl={carousel1} salePrices={[100]} listPrices={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P002">
                    <ProductCard title="test" coverUrl={carousel2} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P003">   
                    <ProductCard title="test" coverUrl={carousel3} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P001">
                    <ProductCard title="test" coverUrl={carousel1} salePrices={[100]} listPrices={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P002">
                    <ProductCard title="test" coverUrl={carousel2} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/P003">   
                    <ProductCard title="test" coverUrl={carousel3} salePrices={[100 ,200]} listPrices={[200,299]}/>
                    </Link>
                </ProductContainer>
            </ProductCollectionContainer>
            <ManualWrapper>
                <Container>
                    <ManualTitle>發現你喜愛的品牌</ManualTitle>
                    <ManualText>蝦皮購物是台灣首屈一指的電商平台，多樣購物網站服務包括蝦皮商城、蝦皮特選、蝦皮直送、蝦皮超市等，更陸續設立蝦皮店到店，並提供蝦皮店到店隔日到貨及蝦皮店到家宅配等多種取貨選擇，服務更升級！簡易操作介面、清楚的商品評價讓你輕鬆選好物。在蝦皮下單後，透過訂單詳情可以隨時進行包裹查詢，無需擔心收不到你所訂購的商品！而在商品鑑賞期期間，蝦皮安心退讓你一鍵就能申請退貨，購物不再怕踩雷，盡情享受「放心買、安心退」的絕佳購物環境！蝦皮更承諾保障你的交易安全，提供多種安全可靠的付款方式，街口支付等行動支付超方便！趕快到蝦皮購物享受蝦皮免運吃到飽，開啟全新的購物網站體驗！</ManualText>
                    <ManualTitle>蝦皮商城三大保證</ManualTitle>
                    <ManualText>蝦皮商城推出三大保證:100%正品假一賠二，十五天鑑賞期，退貨免運費</ManualText>
                    <ManualSubTitle>100%正品，假一賠二</ManualSubTitle>
                    <ManualText>為了確保提供最優質的購物體驗，保證買家權益</ManualText>
                    <ManualSubTitle>十五天鑑賞期</ManualSubTitle>
                    <ManualText>為了確保提供最優質的購物體驗，保證買家權益</ManualText>
                    <ManualSubTitle>退貨無負擔</ManualSubTitle>
                    <ManualText>為了確保提供最優質的購物體驗，保證買家權益</ManualText>
                </Container>
            </ManualWrapper>

        </DefaultLayout>
    );
}

export default HomePage;