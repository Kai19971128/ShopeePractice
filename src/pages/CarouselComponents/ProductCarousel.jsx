import React from "react";
import styled from "styled-components";
import { Carousel ,Image as AntdImg } from "antd";
import ProductPreview1 from "../../Imgs/productPage/productPreview/10001.jpg"
import ProductPreview2 from "../../Imgs/productPage/productPreview/10002.jpg"
import ProductPreview3 from "../../Imgs/productPage/productPreview/10003.jpg"
import ProductPreview4 from "../../Imgs/productPage/productPreview/10004.jpg"
import ProductPreview5 from "../../Imgs/productPage/productPreview/10005.jpg"
import ProductPreview6 from "../../Imgs/productPage/productPreview/10006.jpg"


const StyleProductPreview = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
    margin-bottom: 10px;
`
const StyleCarouselWrapper = styled(Carousel)`
    .slick-arrow{
        background-color: rgba(0,0,0,0.5);
        width: 20px;
        height: 40px;
       &::after{
        content: "";
        width: 20px;
        height: 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)rotate(45deg);
       }
     
    }
    .slick-prev{
        left: 0px;
        &::after{
            content: "";
            width: 20px;
            height: 20px;
            top: 50%;
            left: 50%;
            transform: translate(-25%, -50%)rotate(315deg);
        }
    }
    .slick-next{
        right: 0px;
        &::after{
            content: "";
            width: 20px;
            height: 20px;
            top: 50%;
            left: 50%;
            transform: translate(-75%, -50%)rotate(135deg);
        }
    }
`
const ImgContainer = styled.div`
    height: 90px;
    padding: 5px;
    &:focus-visible{
        outline: none;
       }
`
const CarouselImg = styled(
    ({className,preview:externalPreview,...restProps}) => {
        const mergedPreviewConfig ={
            ...(externalPreview || {}),
            toolbarRender : () =>null,
        }
        return(
            <AntdImg
                className={className}
                {...restProps}
                preview={mergedPreviewConfig}

            />
        )
    }
    
)`
 height: 85px;
  border: 2px solid transparent; /* 預設透明邊框佔位 */
  box-sizing: border-box; /* 確保 border 和 padding 包含在 height/width 內 */

  img {
    /* ... */
  }

  &:hover {
    border-color: #e65d0d; /* hover 時只改變邊框顏色 */
  }
`
// Image的遮罩擋住了Carousel的樣式，要刪除或改寫遮罩


// Javascript code
const ProductCarousel = () => {
    
    const [mainImgSrc, setMainImgSrc] = React.useState(ProductPreview1);
    const handleThumbnailHover = (imgSrc)=>{
        setMainImgSrc(imgSrc);
    }
    return (
        <>
        <StyleProductPreview src={mainImgSrc} alt="Product Preview"/>
        <StyleCarouselWrapper  
        slidesToShow={5} 
        slidesToScroll={1} 
        arrows={true}
        infinite={false}
        dots={false} 
        
        >
        <ImgContainer onMouseEnter={()=>handleThumbnailHover(ProductPreview1)}>
            <CarouselImg  src={ProductPreview1} alt="Thumbnail 1"/>
        </ImgContainer>
        <ImgContainer onMouseEnter={()=>handleThumbnailHover(ProductPreview2)}>
            <CarouselImg src={ProductPreview2} alt="Thumbnail 2"/>
        </ImgContainer>
        <ImgContainer onMouseEnter={()=>handleThumbnailHover(ProductPreview3)}>
            <CarouselImg src={ProductPreview3} alt="Thumbnail 3"/>
        </ImgContainer>
        <ImgContainer onMouseEnter={()=>handleThumbnailHover(ProductPreview4)}>
            <CarouselImg src={ProductPreview4} alt="Thumbnail 4"/>
        </ImgContainer>
        <ImgContainer onMouseEnter={()=>handleThumbnailHover(ProductPreview5)}>
            <CarouselImg src={ProductPreview5} alt="Thumbnail 5"/>
        </ImgContainer>
        <ImgContainer onMouseEnter={()=>handleThumbnailHover(ProductPreview6)}>
            <CarouselImg src={ProductPreview6} alt="Thumbnail 6"/>
        </ImgContainer>
        </StyleCarouselWrapper>
        </>
    )
}

export default ProductCarousel;