import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Clearfix from "../components/common/clearfix";
import Footer from "../components/layout/footer";
import Flexbox from "../components/common/Flexbox";
import { Carousel } from 'antd';    
import carousel1 from "../../src/Imgs/carousel/10001.jpeg";
import carousel2 from "../../src/Imgs/carousel/10002.jpeg";
import carousel3 from "../../src/Imgs/carousel/10003.jpeg";
import banner1 from "../../src/Imgs/banner/10001.png";
import banner2 from "../../src/Imgs/banner/10002.png";
import banner3 from "../../src/Imgs/banner/10003.png";
import ProductCard from "../components/common/product/ProductCard";


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
 
`
const ProductContainer = styled.div`
    width: 16.67%;
    min-height:200px;
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



const HomePage = () => {
    return (
        <DefaultLayout fixedHeader={true}>
            <Clearfix $height="200px"/>
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
            <Flexbox justify="center" maxWidth="1200px" margin="0 auto 24px auto">
                <StyledLink to="/P006" >
                    <Image src={carousel2} alt="banner1" width="100%" height="100px" />
                </StyledLink>
            </Flexbox>
            <ProductCollectionContainer>
                <ProductContainer>
                    <ProductCard/>
                </ProductContainer>
            </ProductCollectionContainer>

        </DefaultLayout>
    );
};

export default HomePage;