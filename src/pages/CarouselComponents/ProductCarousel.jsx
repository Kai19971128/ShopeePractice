import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Carousel ,Image } from "antd";
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
       .ant-image-mask{
        display: none;
    }
    `
const CarouselImg = styled(Image)`
 height: 85px;
 cursor: pointer;
 &:hover {
 border: 2px solid #e65d0d;
 }
 
 
`



// Javascript code
const initialCarouselImages = [
    ProductPreview1,
    ProductPreview2,
    ProductPreview3,
    ProductPreview4,
    ProductPreview5,
    ProductPreview6
]
const ProductCarousel = ({ mainImageToDisplay, onInternalThumbnailHover }) => {
    
     const [internalPreviewSrc, setInternalPreviewSrc] = useState(mainImageToDisplay || initialCarouselImages[0])

     useEffect(() => {
        if (mainImageToDisplay) {
            setInternalPreviewSrc(mainImageToDisplay);
        }
    }, [mainImageToDisplay]);
    const handleInternalHover = (imgSrc) => {
        setInternalPreviewSrc(imgSrc); // 更新 ProductCarousel 自己的主圖
        if (onInternalThumbnailHover) { // 如果父元件傳了這個 callback
            onInternalThumbnailHover(imgSrc); // 通知父元件
        }
    };
    return (
        <>
        <StyleProductPreview src={internalPreviewSrc} alt="Product Preview"/>
        <StyleCarouselWrapper  
        slidesToShow={5} 
        slidesToScroll={1} 
        arrows={true}
        infinite={false}
        dots={false} 
        
        >
        {initialCarouselImages.map((imgSrc, index) => (
            <ImgContainer
                key={index}
                onMouseEnter={()=> handleInternalHover(imgSrc)}
            >
                <CarouselImg
                    src={imgSrc}
                    alt={`Thumbnail ${index + 1}`}
                    preview={{ toolbarRender: () => null }}
                />
            </ImgContainer>
        ))}


      
        </StyleCarouselWrapper>
        </>
    )
}

export default ProductCarousel;