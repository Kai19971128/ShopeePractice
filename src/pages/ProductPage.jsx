
// plugins
import React from "react";
import styled from "styled-components";
// layout
import DefaultLayout from "../components/layout/DefaultLayout";
import Flexbox from "../components/common/Flexbox";
import ProductCarousel from "../pages/CarouselComponents/ProductCarousel";
// components
import { Breadcrumb ,Divider ,Image ,Carousel} from "antd";
// Img
import ShareMsg from "../Imgs/productPage/messenger.svg"
import ShareFacebook from "../Imgs/productPage/facebook.svg"
import ShareTwitter from "../Imgs/productPage/twitter.svg"
import SharePinterest from "../Imgs/productPage/pinterest.svg"
import Likeheart from "../Imgs/productPage/likeheart.svg"
import ProductPreview1 from "../Imgs/productPage/productPreview/10001.jpg"
import ProductPreview2 from "../Imgs/productPage/productPreview/10002.jpg"
import ProductPreview3 from "../Imgs/productPage/productPreview/10003.jpg"
import ProductPreview4 from "../Imgs/productPage/productPreview/10004.jpg"
import ProductPreview5 from "../Imgs/productPage/productPreview/10005.jpg"
import ProductPreview6 from "../Imgs/productPage/productPreview/10006.jpg"

// Carousel CSS--------------
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
//   Carousel CSS--------------
// ProductInfo--------------
const ProductInfo = styled(Flexbox)`
    width: 1200px;
    height: 625.8px;
    background-color: #ccc;
    margin: 0 auto;
    `
// ProductInfoLeft--------------
const ProductInfoLeft = styled(Flexbox)`
    flex-direction: column;
    width: calc(40% - 30px);
    height: calc(100% - 30px);
    background-color: #fff;
    padding: 15px;
`
// ProductInfoPreview--------------
const ProductInfoPreview = styled(Flexbox)`
    flex-direction: column;
    width: 100%;
    height:100%;
    margin-bottom: 25px;
`
const ProductInfoBigImg = styled(Flexbox)`
    width: 100%;
    height: 450px;
`
const ProductInfoSmallImg = styled(Flexbox)`
    flex-direction: column;
    width: 100%;
    height: calc(100% - 455px);
    margin:5px 0px -5px 0px;
`

// ProductInfoPreview--------------
// ProductInfoShareAndLike--------------
// ProductInfoShare--------------
const ProductInfoShareAndLike = styled(Flexbox)`
    width: 100%;
    height: 25px;
    align-items: center;
`
const ProductInfoShare = styled(Flexbox)`
    width: 50%;
    align-items: center ;

`
const ProductInfoShareText = styled.p`
   height: 16px;
   margin-right: 10px;
`
const ProductInfoShareImg = styled.img`
    margin-right: 5px;
`
// ProductInfoShare--------------
// ProductInfoLike
const ProductInfoLike = styled(Flexbox)`
    width: 50%;
    align-items: center;
    
`
const ProductInfoLikeImg = styled.img`
    margin-right: 5px;
`
const ProductInfoLikeText = styled.p`
    height: 16px;
`
// ProductInfoShareAndLike--------------
// ProductInfoLeft--------------
// ProductInfoRight--------------
const ProductInfoRight = styled(Flexbox)`
    width: 60%;
`
const ProductInfoTitle = styled.h2`
`
const ProductInfoOverview = styled(Flexbox)`
`
const ProductInfoPrice = styled(Flexbox)`
`
// ProductInfoChoice--------------
const ProductInfoChoice = styled(Flexbox)`
`
const ProductInfoDiscount = styled(Flexbox)`
`
const ProductInfoPromotion = styled(Flexbox)`
`
const ProductInfoDelive = styled(Flexbox)`
`
const ProductInfoCategory = styled(Flexbox)`
`
const ProductInfoSize = styled(Flexbox)`
`
const ProductInfoQuantity = styled(Flexbox)`
`
// ProductInfoChoice--------------
// ProductInfoBuyContent--------------
const ProductInfoBuyContent = styled(Flexbox)`
`
const ProductInfoAddCart = styled(Flexbox)`
`
const ProductInfoBuyNow = styled(Flexbox)`
`
// ProductInfoBuyContent--------------
// Mall--------------
const Mall = styled(Flexbox)`
`
// MallLeft--------------
const MallLeft = styled(Flexbox)`
`
const MallSellerImg = styled(Flexbox)`
`
// MallInfo--------------
const MallSellerrInfo = styled(Flexbox)`
`
// MallInfoTop--------------
const MallSellerInfoTop = styled(Flexbox)`
`
const MallSellerName = styled(Flexbox)`
`
const MallLastTimeOnline = styled(Flexbox)`
`
//MallInfoBottom--------------
const MallSellerInfoBottom = styled(Flexbox)`
`
const MallChatWithSeller = styled(Flexbox)`
`
const MallEnterMall = styled(Flexbox)`
`
//MallInfoBottom--------------
// MallLeft--------------
// MallRight--------------(用grid)
const MallRight = styled(Flexbox)`
`
const MallCommentQuantity = styled(Flexbox)`
`
const MallResponseRate = styled(Flexbox)`
`
const MallOperatingTime = styled(Flexbox)`
`
const MallMallProductQuantitly = styled(Flexbox)`
`
const MallResponseSpeed = styled(Flexbox)`
`
const MallFans = styled(Flexbox)`
`
// MallRight--------------
// ProductDetail--------------
const ProductDetail = styled(Flexbox)`
`
const ProducSpe = styled(Flexbox)`
`
const ProducSpeTitle = styled(Flexbox)`
`
// ProductSpeComtent--------------
const ProducSpeContent = styled(Flexbox)`
`
const ProducSpeCategory = styled(Flexbox)`
`
const ProducSpeSpecialQuantity = styled(Flexbox)`
`
const ProducSpeNormalQuantitly = styled(Flexbox)`
`
const ProducSpeType = styled(Flexbox)`
`
const ProducSpeStyle = styled(Flexbox)`
`
const ProducSpeShippingPalce = styled(Flexbox)`
`
// ProductSpeComtent--------------
// ProductDes--------------
const ProductDes = styled(Flexbox)`
`
const ProductDesTitle = styled(Flexbox)`
`
const ProductDesContent = styled(Flexbox)`
`
// ProductDes--------------
// ProductDetail--------------

// ProductComment--------------
const ProductComment = styled(Flexbox)`
`
const ProductCommentTitle = styled(Flexbox)`
`
const ProductCommentScore = styled(Flexbox)`
`
const ProductCommentContent = styled(Flexbox)`
`
// ProductComment--------------

// OtherProduct--------------
const OtherProduct = styled(Flexbox)`
`
const OtherProducTitle = styled(Flexbox)`
`


const ProductPage = () => {
    return (
        <DefaultLayout fixedHeader={false}>
            <Breadcrumb
                style={{
                    margin: "0 auto",
                    width: "1200px",
                    padding: "0 0 20px 0",}}
                items={[
                {
                    title: 'Home',
                },
                {
                    title: <a href="">Application Center</a>,
                },
                {
                    title: <a href="">Application List</a>,
                },
                {
                    title: 'An Application',
                },
                ]}
            />
            <ProductInfo>
                <ProductInfoLeft>
                    <ProductInfoPreview>
                            <ProductCarousel />
                    </ProductInfoPreview>
                    <ProductInfoShareAndLike>
                        <ProductInfoShare>
                            <ProductInfoShareText>分享</ProductInfoShareText>
                            <ProductInfoShareImg src={ShareMsg} width={25} height={25} />
                            <ProductInfoShareImg src={ShareFacebook} width={25} height={25} />
                            <ProductInfoShareImg src={ShareTwitter} width={25} height={25} />
                            <ProductInfoShareImg src={SharePinterest} width={25} height={25} />
                        <Divider type="vertical" style={{ height: "25px" }} />
                        </ProductInfoShare>
                        <ProductInfoLike>
                            <ProductInfoLikeImg src={Likeheart} width={25} height={25} />
                            <ProductInfoLikeText>喜歡()</ProductInfoLikeText>
                        </ProductInfoLike>
                    </ProductInfoShareAndLike>
                </ProductInfoLeft>
                <ProductInfoRight>
                    <ProductInfoTitle></ProductInfoTitle>
                    <ProductInfoOverview></ProductInfoOverview>
                    <ProductInfoPrice></ProductInfoPrice>
                    <ProductInfoChoice>
                    <ProductInfoDiscount></ProductInfoDiscount>
                    <ProductInfoPromotion></ProductInfoPromotion>
                    <ProductInfoDelive></ProductInfoDelive>
                    <ProductInfoCategory></ProductInfoCategory>
                    <ProductInfoSize></ProductInfoSize>
                    <ProductInfoQuantity></ProductInfoQuantity>
                    </ProductInfoChoice>
                    <ProductInfoBuyContent>
                        <ProductInfoAddCart></ProductInfoAddCart>
                        <ProductInfoBuyNow></ProductInfoBuyNow>
                    </ProductInfoBuyContent>
                </ProductInfoRight>
            </ProductInfo>
            <Mall>
                <MallLeft>
                    <MallSellerImg></MallSellerImg>
                    <MallSellerrInfo>
                        <MallSellerInfoTop>
                            <MallSellerName></MallSellerName>
                            <MallLastTimeOnline></MallLastTimeOnline>
                        </MallSellerInfoTop>
                        <MallSellerInfoBottom>
                            <MallChatWithSeller></MallChatWithSeller>
                            <MallEnterMall></MallEnterMall>
                        </MallSellerInfoBottom>
                    </MallSellerrInfo>
                </MallLeft>
                <MallRight>
                    <MallCommentQuantity></MallCommentQuantity>
                    <MallResponseRate></MallResponseRate>
                    <MallOperatingTime></MallOperatingTime>
                    <MallMallProductQuantitly></MallMallProductQuantitly>
                    <MallResponseSpeed></MallResponseSpeed>
                    <MallFans></MallFans>
                </MallRight>
            </Mall>
            <ProductDetail>
                <ProducSpe>
                <ProducSpeTitle></ProducSpeTitle>
                <ProducSpeContent>
                    <ProducSpeCategory></ProducSpeCategory>
                    <ProducSpeSpecialQuantity></ProducSpeSpecialQuantity>
                    <ProducSpeNormalQuantitly></ProducSpeNormalQuantitly>
                    <ProducSpeType></ProducSpeType>
                    <ProducSpeStyle></ProducSpeStyle>
                    <ProducSpeShippingPalce></ProducSpeShippingPalce>
                </ProducSpeContent>
                </ProducSpe>
                <ProductDes>
                    <ProductDesTitle></ProductDesTitle>
                    <ProductDesContent>
                    </ProductDesContent>
                </ProductDes>
            </ProductDetail>
            <ProductComment>
                <ProductCommentTitle></ProductCommentTitle>
                <ProductCommentScore></ProductCommentScore>
                <ProductCommentContent></ProductCommentContent>
            </ProductComment>
            <OtherProduct>
                <OtherProducTitle></OtherProducTitle>
            </OtherProduct>
        </DefaultLayout>    
    );
};

export default ProductPage;