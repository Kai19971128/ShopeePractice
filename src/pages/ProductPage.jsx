
// plugins
import React,{useState,useEffect, act} from "react";
import styled from "styled-components";
// layout
import DefaultLayout from "../components/layout/DefaultLayout";
import Flexbox from "../components/common/Flexbox";
import ProductCarousel from "../pages/CarouselComponents/ProductCarousel";
// components
import { Breadcrumb ,Divider ,Image ,Carousel,Rate,ConfigProvider,Space,Popover} from "antd";
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
import SellerImg from "../Imgs/mall/SellerImg.jpg"
import UserImg from "../Imgs/productPage/user.svg"

//icons
import {QuestionCircleOutlined,TruckOutlined} from '@ant-design/icons';


// ProductInfo--------------
const ProductInfo = styled(Flexbox)`
    width: 1200px;
    height: 625.8px;
    margin: 0 auto 50px auto;
    `
// ProductInfoLeft--------------
const ProductInfoLeft = styled(Flexbox)`
    flex-direction: column;
    width: calc(40% - 30px);
    height: calc(100% - 30px);
    padding: 15px;
`
// ProductInfoPreview--------------
const ProductInfoPreview = styled(Flexbox)`
    flex-direction: column;
    width: 100%;
    height:100%;
    margin-bottom: 25px;
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
    cursor: pointer;
`
// ProductInfoShare--------------
// ProductInfoLike
const ProductInfoLike = styled(Flexbox)`
    width: 50%;
    align-items: center;
    
`
const ProductInfoLikeImg = styled.img`
    margin-right: 5px;
    cursor: pointer;
`
const ProductInfoLikeText = styled.p`
    height: 16px;
`
// ProductInfoShareAndLike--------------
// ProductInfoLeft--------------
// ProductInfoRight--------------
const ProductInfoRight = styled(Flexbox)`
    width: 60%;
    padding: 20px 35px 0 20px;
    flex-direction: column;
`
const ProductInfoTitle = styled.h2`
    width: 100%;
    height: fit-content;
    font-size: 20px;
    font-weight: 500;
`
const ProductInfoOverview = styled(Flexbox)`
    justify-content: space-between;
    margin-top: 10px;
`
const OverviewLeft = styled(Flexbox)`
    width: fit-content;
`
const ProductInfoStar = styled.div`
    width: fit-content;
    cursor: pointer;    
    padding-right: 15px;
    border-right: 1px solid #ccc;
`
const StarNumber = styled.span`
    text-decoration: underline;
`
const StyleRate = styled(Rate)`
    font-size: 10px;
    && .ant-rate-star{
        margin-right: 1px;
    }
`
const ProductInfoComment = styled(Flexbox)`
    padding: 0 15px;
    border-right: 1px solid #ccc;
`
const ProductInfoSaled = styled(Flexbox)`
    padding: 0 15px;
`

const ProdictInfoReport = styled(Flexbox)`
    width: fit-content;
    color: rgba(0,0,0,.54);
`
const ProductInfoPrice = styled(Flexbox)`
    width:100%;
    background-color: #FAFAFA;
    padding: 15px 20px;
    margin-top:10px;
`
const PriceNumber = styled.span`
    color:#ee4d2d;
    font-size: 30px;
`
// ProductInfoChoice--------------
const ProductInfoChoice = styled(Flexbox)`
    flex-direction: column;
    width: 100%;
    
`
const ChioceTitle = styled.p`
    width: 100px;
    height: fit-content;
    margin-right: 10px;
    font-size: 14px;
    color: #757575;
    
    
`
const ProductInfoDiscount = styled(Flexbox)`
    width: 100%;
    height: 100%;
    margin-bottom: 25px;
    align-items: center;
`
const DiscountContent = styled(Flexbox)`    
    width: fit-content;
    height: 30px;
    align-items: center;
`
const DiscountContentText = styled.p`
    height: fit-content;
    color: #ee4d2d;
    background-color: rgba(208,1,27,.08);
    margin-right: 10px;
    padding: 3px 6px;
`
const ProductInfoPromotion = styled(Flexbox)`
    width: 100%;
    height: 100%;
    margin-bottom: 25px;
    align-items: center;
`
const PromotionContent = styled(Flexbox)`
    width: fit-content;
    height: 30px;
    align-items: center;
`
const ProductInfoPromotionText = styled.p`
    color: #ee4d2d;
    padding: 3px 6px;
    border: 1px solid #ee4d2d;
`
const ProductInfoDelive = styled(Flexbox)`
     width: 100%;
    height: 100%;
    margin-bottom: 25px;
    align-items: center;
`
const DeliveContent = styled(Flexbox)`
    width: fit-content;
    height: 30px;
    align-items: center;
`
const DeliveTextSection = styled(Flexbox)`
    flex-direction: column;
`
const DeliverContentText = styled.p`
    font-size: 14px;
`
const ProductInfoCategory = styled(Flexbox)`
    width: 100%;
    height: 100%;
    margin-bottom: 25px;
    align-items: center;
`
const CategoryContent = styled(Flexbox)`
    width: fit-content;
    height: fit-content;
    align-items: center;
    gap: 10px;
    `
const CategoryItem = styled(Flexbox)`
    width: fit-content;
    align-items: center;
    padding: 8px;
    border: 1px solid ${(props)=>props.isActive?"#ee4d2d":"rgba(0,0,0,0.09)"};
    transition: border-color 0.2s ease;
    &:hover{
        border-color:${(props)=>props.isActive?"#c73e1e":"#ee4d2d"};
    }
    
    
    
   
`
const CategoryImg = styled.img`
    width:24px;
    height: 24px;

`
const CategoryText = styled.p`
    font-size: 14px;
    margin-left: 5px;
`
const ProductInfoSize = styled(Flexbox)`
  width: 100%;
    height: 100%;
    margin-bottom: 25px;
    align-items: center;
`
const SizeContent = styled(Flexbox)`
    width: fit-content;
    height: fit-content;
    
`
const SizeContentText = styled(Flexbox)`
    width: 80px;
    height:40px;
    font-size: 14px;
    border: 1px solid rgba(0,0,0,0.09);
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s ease;
    &:hover{
        border: 1px solid #ee4d2d;
        color: #ee4d2d;
    }
    `
const ProductInfoQuantity = styled(Flexbox)`
    width: 100%;
    height: 100%;
    margin-bottom: 25px;
    align-items: center;
    `
const QuantityContent = styled(Flexbox)`
    width: fit-content;
    `
const QuantityOperate = styled(Flexbox)`
    width: 100px;
    height: fit-content;
    border: 1px solid rgba(0,0,0,0.09);
    margin-right:20px ;
`
const QuantityReduce = styled(Flexbox)`
    width: 25%;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(0,0,0,0.09);
    cursor: pointer;
    user-select: none;
    `
const QuantityNumber = styled(Flexbox)`
    width: 50%;
    height: 30px;
    align-items: center;
    justify-content: center;
    user-select: none;
    
`
const QuantityAdd = styled(Flexbox)`
    width: 25%;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-left: 1px solid rgba(0,0,0,0.09);
    cursor: pointer;
    user-select: none;
`
const StockQuantity = styled(Flexbox)`
    align-items: center;

`
// ProductInfoChoice--------------
// ProductInfoBuyContent--------------
const ProductInfoBuyContent = styled(Flexbox)`
`
const ProductInfoAddCart = styled(Flexbox)`
    width: 140px;
    height: 48px;
    padding: 0 20px;
    margin-right: 15px;
    border: 1px solid #ee4d2d;
    background-color: rgba(255,87,34,.1);
    color: #ee4d2d;
    align-items: center;
    justify-content: center;
`
const ProductInfoBuyNow = styled(Flexbox)`
    width: 140px;
    height: 48px;
    padding: 0 20px;
    border: 1px solid #ee4d2d;
    background-color: #ee4d2d;
    color: #fff;
    align-items: center;
    justify-content: center;
`
// ProductInfoBuyContent--------------
// Mall--------------
const Mall = styled(Flexbox)`
    width: 1200px;
    height:fit-content;
    margin: 0 auto  50px auto;
`
// MallLeft--------------
const MallLeft = styled(Flexbox)`
    width: 30%;
`
const MallSellerImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
`
// MallInfo--------------
const MallSellerrInfo = styled(Flexbox)`
    flex-direction: column;
    padding-right: 20px;
    border-right: 1px solid #ccc;
`
// MallInfoTop--------------
const MallSellerInfoTop = styled(Flexbox)`
     flex-direction: column;
`
const MallSellerName = styled(Flexbox)`
    margin-bottom: 5px;
`
const MallLastTimeOnline = styled(Flexbox)`
    font-size: 14px;
    color: rgba(0,0,0,.54);
    margin-bottom: 5px;
`
//MallInfoBottom--------------
const MallSellerInfoBottom = styled(Flexbox)`
`
const MallChatWithSeller = styled(Flexbox)`
    width: 50px;
    height:34px;
    padding: 0 20px;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,87,34,.1);
    color: #ee4d2d;
    border: 1px solid #ee4d2d;
`
const MallEnterMall = styled(Flexbox)`
    width: fit-content;
    height:34px;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color:#555;
    border : 1px solid rgba(0,0,0,.09);
`
//MallInfoBottom--------------
// MallLeft--------------
// MallRight--------------(用grid)
const MallRight = styled.div`
    display: grid;
    width: 70%;
    height: 100%;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(2,1fr);
    row-gap: 20px;
    margin:auto 0;
`
const MallParameter = styled(Flexbox)`
    justify-content: space-between;
    padding-right: 30px;
`
const MallParameterTitle = styled(Flexbox)`
    color: rgba(0,0,0,.4);
`
const MallParameterCNumber = styled(Flexbox)`
    color:#ee4d2d;
`
// MallRight--------------
// ProductDetail--------------
const ProductDetail = styled(Flexbox)`
    width: 1200px;
    height:fit-content;
    margin: 0 auto 50px auto;
    padding:25px;
    flex-direction: column;
`
const ProductDetailTitle = styled(Flexbox)`
    font-size: 18px;
    color: #757575;
    background-color: rgba(0,0,0,.02);
    padding: 15px;
    margin-bottom: 20px;

`
const ProductDetailSection = styled(Flexbox)`
    width: 100%;
    height: fit-content;
    flex-direction: column;
    padding: 0 15px;
`
// ProductSpeComment--------------
const ProducSpeContent = styled(Flexbox)`
    width: 100%;
    height: fit-content;
    
`
const ProductSpeTitle = styled(Flexbox)`
    width: 200px;
    height: fit-content;
    margin-bottom: 20px;
`
const ProductSpeText = styled(Flexbox)`
    width: 1000px;
`

// ProductSpeComtent--------------
// ProductDes--------------

const ProductDesContent = styled(Flexbox)`
`
// ProductDes--------------
// ProductDetail--------------

// ProductComment--------------
const ProductComment = styled(Flexbox)`
    width: 1200px;
    height: fit-content;
    margin: 0 auto 50px auto;
    padding: 25px;
    flex-direction: column;
`
const ProductCommentTitle = styled(Flexbox)`
    width: 100%;
    height: fit-content;
    font-size: 18px;
    color: #757575;
    background-color: rgba(0,0,0,.02);
    padding: 15px;
    margin-bottom: 20px;
`
const ProductCommentScore = styled(Flexbox)`
    width: 100%;
    height: fit-content;
    padding: 30px;
    border:1px solid #f9ede5;
    background-color: #fffbf8;
    align-items: center;
    margin-bottom: 20px;
    
`
const ScoreSection = styled(Flexbox)`
    width: fit-content;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
    
`
const ScoreText = styled(Flexbox)`
    color: #ee4d2d;
    font-size: 30px;
    margin-bottom: 10px;
`
const FilterSection = styled(Flexbox)`
    
`
const FilterItem = styled(Flexbox)`
    width: 100px;
    height:32px;
    margin-right: 8px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props)=>props.isActive?"#ee4d2d":"rgba(0,0,0,0.09)"};
    border-radius: 2px;
    cursor: pointer;
    &:hover{
        border: 1px solid #ee4d2d;
    }
`
const FilterText = styled(Flexbox)`
`
const ProductCommentContent = styled(Flexbox)`
    height:50px;
    margin-bottom: 20px;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;

`
const BuyerImage = styled.img`
    width: 50px;
    border-radius: 50%;
    margin-right: 15px;
`
const BuyerInfo = styled(Flexbox)`
    flex-direction: column;
    justify-content: space-between;
    
`
const BuyerName = styled.p`
    font-size: 14px;
    
`
const CommentRate = styled(Rate)`
    font-size: 12px;
    
    && .ant-rate-star{
        margin-right: 1px;
        }
`
const ItemInfo = styled(Flexbox)`

`
const CommentTime = styled.p`
    font-size: 12px;
    margin-right: 5px;
`
const ItemCategory = styled.p`
    font-size: 12px;
`
// ProductComment--------------



// Javascript code
const categoryData = [
    {id:"cat001" , imgSrc:ProductPreview1, text:"商品1",previewImageSrc:ProductPreview1},
    {id:"cat002" , imgSrc:ProductPreview2, text:"商品2",previewImageSrc:ProductPreview2},
    {id:"cat003" , imgSrc:ProductPreview3, text:"商品3",previewImageSrc:ProductPreview3},
    {id:"cat004" , imgSrc:ProductPreview4, text:"商品4",previewImageSrc:ProductPreview4},
    {id:"cat005" , imgSrc:ProductPreview5, text:"商品5",previewImageSrc:ProductPreview5},
]
const filterOptions = [
    {id:"star001" , text:"1星"},
    {id:"star002" , text:"2星"},
    {id:"star003" , text:"3星"},
    {id:"star004" , text:"4星"},
    {id:"star005" , text:"5星"},
]



const ProductPage = () => {
    const [mainPreviewImgSrc, setMainPreviewImgSrc] = useState(ProductPreview1);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const handleCategoryClick = (categoryId,categoryPreviewSrc) => {
        setSelectedCategoryId(prevId => prevId === categoryId ? null : categoryId);
        if(selectedCategoryId !== categoryId){
            setMainPreviewImgSrc(categoryPreviewSrc);
        }else{
            setMainPreviewImgSrc(ProductPreview1);
        }
    };
    const handleCategoryHover = (categoryPreviewSrc) => {
        setMainPreviewImgSrc(categoryPreviewSrc);
    };

    const [QuantityChange, setQuantityChange] = useState(1);
    const handleQuantityChange = (value,color) => {
        setQuantityChange(value,color);
    };
   
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const [randomNumber, setRandomNumber] = useState(getRandomInt(1, 100));
   
    const [activeFilterId, setActiveFilterId] = useState(null);

    const handleStarClick = (filterId) => {
        setActiveFilterId(prevId => prevId === filterId ? null : filterId);
    };
    return (
        <DefaultLayout fixedHeader={false}>
            <Breadcrumb
                style={{
                    margin: "0 auto",
                    width: "1200px",
                    padding: "0 0 20px 0",}}
                items={[
                {
                    title: '蝦皮購物',
                },
                {
                    title: <a href="">戶外旅行</a>,
                },
                {
                    title: <a href="">戶外背包</a>,
                },
                {
                    title: '機能配件',
                },
                ]}
            />
            <ProductInfo>
                <ProductInfoLeft>
                    <ProductInfoPreview>
                            <ProductCarousel mainImageToDisplay={mainPreviewImgSrc} />
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
                    <ProductInfoTitle>大和釣魚新款多功能優質防水釣魚包戶外運動旅行野營登山背包</ProductInfoTitle>
                    <ProductInfoOverview>
                        <OverviewLeft>
                        <ProductInfoStar>
                            <StarNumber>5.0</StarNumber>
                            <StyleRate disabled defaultValue={5}></StyleRate>
                        </ProductInfoStar>
                        <ProductInfoComment>7 評價</ProductInfoComment>
                        <ProductInfoSaled>
                            <span>9 已售出 </span>
                            <Popover content="test">
                            <QuestionCircleOutlined />
                            </Popover>
                        </ProductInfoSaled>
                        </OverviewLeft>
                        <ProdictInfoReport>匿名檢舉商品</ProdictInfoReport>
                    </ProductInfoOverview>
                    <ProductInfoPrice>
                        <PriceNumber>$ 430</PriceNumber>
                    </ProductInfoPrice>
                    <ProductInfoChoice>
                        <ProductInfoDiscount>
                            <ChioceTitle>賣場優惠券</ChioceTitle>
                            <DiscountContent>
                                <DiscountContentText>現折$5</DiscountContentText>
                                <DiscountContentText>現折$10</DiscountContentText>
                                <DiscountContentText>現折$15</DiscountContentText>
                                <DiscountContentText>現折$20</DiscountContentText>
                                <DiscountContentText>現折$25</DiscountContentText>
                            </DiscountContent>
                        </ProductInfoDiscount>
                        <ProductInfoPromotion>
                            <ChioceTitle>促銷組合</ChioceTitle>
                            <PromotionContent>
                                <ProductInfoPromotionText>3件8折</ProductInfoPromotionText>
                            </PromotionContent>
                        </ProductInfoPromotion>
                        <ProductInfoDelive>
                            <ChioceTitle>運送</ChioceTitle>
                            <DeliveContent>
                                <TruckOutlined style={{ marginRight: "10px", fontSize: "20px" }} />
                                <DeliveTextSection>
                                    <DeliverContentText>預計送達時間5月20日-5月23日</DeliverContentText>
                                    <DeliverContentText>運費:0元起</DeliverContentText>
                                </DeliveTextSection>    
                            </DeliveContent>
                        </ProductInfoDelive>
                        <ProductInfoCategory>
                            <ChioceTitle>顏色</ChioceTitle>
                            <CategoryContent>
                              {categoryData.map((category) => (
                                <CategoryItem
                                    key={category.id}
                                    onClick={() => handleCategoryClick(category.id, category.previewImageSrc)}
                                     onMouseEnter={() => handleCategoryHover(category.previewImageSrc)}
                                    isActive={selectedCategoryId === category.id}
                                >
                                    <CategoryImg src={category.imgSrc}/>
                                    <CategoryText>{category.text}</CategoryText>
                                </CategoryItem>
                                ))}
                            </CategoryContent>
                        </ProductInfoCategory>
                        <ProductInfoSize>
                            <ChioceTitle>容量</ChioceTitle>
                            <SizeContent>
                                <SizeContentText>其他</SizeContentText>
                            </SizeContent>
                        </ProductInfoSize>
                        <ProductInfoQuantity>
                            <ChioceTitle>數量</ChioceTitle>
                            <QuantityContent>
                                <QuantityOperate>
                                <QuantityReduce 
                                    style={{
                                        color: QuantityChange === 1 ? "#ccc" : "#333"
                                    }}
                                    onClick={() => {
                                        if(QuantityChange > 1){
                                        handleQuantityChange(QuantityChange - 1)}
                                    }
                                }
                                > - </QuantityReduce>
                                <QuantityNumber>{`${QuantityChange}`}</QuantityNumber>
                                <QuantityAdd
                                style={{
                                        color: QuantityChange === randomNumber ? "#ccc" : "#333"
                                    }}
                                    onClick={() =>{ 
                                        if(QuantityChange < randomNumber)
                                        handleQuantityChange(QuantityChange + 1)}}
                                > + </QuantityAdd>
                                </QuantityOperate>
                                <StockQuantity>{`還剩${randomNumber}件`}</StockQuantity>
                            </QuantityContent>
                        </ProductInfoQuantity>
                    </ProductInfoChoice>
                    <ProductInfoBuyContent>
                        <ProductInfoAddCart>加入購物車</ProductInfoAddCart>
                        <ProductInfoBuyNow>直接購買</ProductInfoBuyNow>
                    </ProductInfoBuyContent>
                </ProductInfoRight>
            </ProductInfo>
            <Mall>
                <MallLeft>
                    <MallSellerImg src={SellerImg}/>
                    <MallSellerrInfo>
                        <MallSellerInfoTop>
                            <MallSellerName>kens93207</MallSellerName>
                            <MallLastTimeOnline>2小時前上線</MallLastTimeOnline>
                        </MallSellerInfoTop>
                        <MallSellerInfoBottom>
                            <MallChatWithSeller>聊聊</MallChatWithSeller>
                            <MallEnterMall>查看賣場</MallEnterMall>
                        </MallSellerInfoBottom>
                    </MallSellerrInfo>
                </MallLeft>
                <MallRight>
                    <MallParameter>
                        <MallParameterTitle>商品評價</MallParameterTitle>
                        <MallParameterCNumber>{`${randomNumber}`}</MallParameterCNumber>
                    </MallParameter>
                    <MallParameter>
                        <MallParameterTitle>聊聊回應率</MallParameterTitle>
                        <MallParameterCNumber>{`${randomNumber}`}</MallParameterCNumber>
                    </MallParameter>
                    <MallParameter>
                        <MallParameterTitle>加入時間</MallParameterTitle>
                        <MallParameterCNumber>13個月內</MallParameterCNumber>
                    </MallParameter>
                    <MallParameter>
                        <MallParameterTitle>商品</MallParameterTitle>
                        <MallParameterCNumber>{`${randomNumber}`}</MallParameterCNumber>
                    </MallParameter>
                    <MallParameter>
                        <MallParameterTitle>回應速度</MallParameterTitle>
                        <MallParameterCNumber>幾小時內</MallParameterCNumber>
                    </MallParameter>
                    <MallParameter>
                        <MallParameterTitle>粉絲</MallParameterTitle>
                        <MallParameterCNumber>{`${randomNumber}`}</MallParameterCNumber>
                    </MallParameter>
                </MallRight>
            </Mall>
            <ProductDetail>
                    <ProductDetailTitle>商品規格</ProductDetailTitle>
                    <ProductDetailSection>
                        <ProducSpeContent>
                            <ProductSpeTitle>分類</ProductSpeTitle>
                                  <Breadcrumb
                                        style={{
                                            margin: "0 auto",
                                            width: "1000px",
                                            }}
                                        items={[
                                        {
                                            title: '蝦皮購物',
                                        },
                                        {
                                            title: <a href="">戶外旅行</a>,
                                        },
                                        {
                                            title: <a href="">戶外背包</a>,
                                        },
                                        {
                                            title: '機能配件',
                                        },
                                        ]}
                                    />
                        </ProducSpeContent>
                        <ProducSpeContent>
                            <ProductSpeTitle>商品數量</ProductSpeTitle>
                            <ProductSpeText>{`${randomNumber}`}</ProductSpeText>
                        </ProducSpeContent>
                        <ProducSpeContent>
                                <ProductSpeTitle>產地</ProductSpeTitle>
                                <ProductSpeText>中國</ProductSpeText>
                            </ProducSpeContent>
                        <ProducSpeContent>
                            <ProductSpeTitle>適用場合</ProductSpeTitle>
                            <ProductSpeText>戶外登山</ProductSpeText>
                        </ProducSpeContent>
                        <ProducSpeContent>
                            <ProductSpeTitle>材質</ProductSpeTitle>
                            <ProductSpeText>帆布</ProductSpeText>
                        </ProducSpeContent>
                        <ProducSpeContent>
                            <ProductSpeTitle>圖案</ProductSpeTitle>
                            <ProductSpeText>塗鴉</ProductSpeText>
                        </ProducSpeContent>
                    </ProductDetailSection>
                        <ProductDetailTitle>商品描述</ProductDetailTitle>
                    <ProductDetailSection>
                        <ProductDesContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam facilis unde asperiores minima alias sequi eligendi, ipsum optio suscipit, est ullam nulla provident illum eaque quae cumque repudiandae sit.</ProductDesContent>
                    </ProductDetailSection>
            </ProductDetail>
            <ProductComment>
                <ProductCommentTitle>商品評價</ProductCommentTitle>
                <ProductCommentScore>
                    <ScoreSection>
                        <ScoreText>4.9/5.0</ScoreText>
                        <Rate defaultValue={5} disabled={true}/>
                    </ScoreSection>
                    <FilterSection>
                            {filterOptions.map((filter) => (
                                <FilterItem
                                    key={filter.id}
                                    onClick={() => handleStarClick(filter.id)}
                                    isActive={activeFilterId === filter.id}
                                >
                                    <FilterText isActive={activeFilterId === filter.id}>{filter.text}</FilterText>
                                </FilterItem>
                            ))}
                    </FilterSection>
                </ProductCommentScore>
                <ProductCommentContent>
                    <BuyerImage src={UserImg}/>
                    <BuyerInfo>
                        <BuyerName>k******7</BuyerName>
                        <CommentRate defaultValue={5} disabled={true} />
                        <ItemInfo>
                            <CommentTime>2025-04-30 12:00  |</CommentTime>
                            <ItemCategory>規格: 照片顏色 1,其他</ItemCategory>
                        </ItemInfo>
                    </BuyerInfo>
                </ProductCommentContent>
                <ProductCommentContent>
                    <BuyerImage src={UserImg}/>
                    <BuyerInfo>
                        <BuyerName>k******7</BuyerName>
                        <CommentRate defaultValue={5} disabled={true} />
                        <ItemInfo>
                            <CommentTime>2025-04-30 12:00  |</CommentTime>
                            <ItemCategory>規格: 照片顏色 1,其他</ItemCategory>
                        </ItemInfo>
                    </BuyerInfo>
                </ProductCommentContent>
                <ProductCommentContent>
                    <BuyerImage src={UserImg}/>
                    <BuyerInfo>
                        <BuyerName>k******7</BuyerName>
                        <CommentRate defaultValue={5} disabled={true} />
                        <ItemInfo>
                            <CommentTime>2025-04-30 12:00  |</CommentTime>
                            <ItemCategory>規格: 照片顏色 1,其他</ItemCategory>
                        </ItemInfo>
                    </BuyerInfo>
                </ProductCommentContent>
                <ProductCommentContent>
                    <BuyerImage src={UserImg}/>
                    <BuyerInfo>
                        <BuyerName>k******7</BuyerName>
                        <CommentRate defaultValue={5} disabled={true} />
                        <ItemInfo>
                            <CommentTime>2025-04-30 12:00  |</CommentTime>
                            <ItemCategory>規格: 照片顏色 1,其他</ItemCategory>
                        </ItemInfo>
                    </BuyerInfo>
                </ProductCommentContent>
            </ProductComment>
         
        </DefaultLayout>    
    );
};

export default ProductPage;