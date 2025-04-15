import React from "react";
import styled from "styled-components";
import Container from "../common/container";
const ManualWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-top: solid 1px #f0f0f0;
   border-bottom: solid 1px #f0f0f0;
   padding: 32px 0;
`;
const Title = styled.h2`
    font-size: 24px;
    color: #555;
    margin: 0 0 16px 0;
 `   
const SubTitle = styled.h3`
    font-size: 20px;
    color: #555;
    margin: 0 0 16px 0;
 `
 const Text = styled.p`
    font-size: 16px;
    color: #aaaaaa;
    margin: 0 0 16px 0;
 `
const Manual = () => {
    return (
        <ManualWrapper>
            <Container>
            <Title>發現你喜愛的品牌</Title>
            <Text>蝦皮購物是台灣首屈一指的電商平台，多樣購物網站服務包括蝦皮商城、蝦皮特選、蝦皮直送、蝦皮超市等，更陸續設立蝦皮店到店，並提供蝦皮店到店隔日到貨及蝦皮店到家宅配等多種取貨選擇，服務更升級！簡易操作介面、清楚的商品評價讓你輕鬆選好物。在蝦皮下單後，透過訂單詳情可以隨時進行包裹查詢，無需擔心收不到你所訂購的商品！而在商品鑑賞期期間，蝦皮安心退讓你一鍵就能申請退貨，購物不再怕踩雷，盡情享受「放心買、安心退」的絕佳購物環境！蝦皮更承諾保障你的交易安全，提供多種安全可靠的付款方式，街口支付等行動支付超方便！趕快到蝦皮購物享受蝦皮免運吃到飽，開啟全新的購物網站體驗！</Text>
            <Title>蝦皮商城三大保證</Title>
            <Text>蝦皮商城推出三大保證:100%正品假一賠二，十五天鑑賞期，退貨免運費</Text>
            <SubTitle>100%正品，假一賠二</SubTitle>
            <Text>為了確保提供最優質的購物體驗，保證買家權益</Text>
            <SubTitle>十五天鑑賞期</SubTitle>
            <Text>為了確保提供最優質的購物體驗，保證買家權益</Text>
            <SubTitle>退貨無負擔</SubTitle>
            <Text>為了確保提供最優質的購物體驗，保證買家權益</Text>
            </Container>
        </ManualWrapper>
    );
};

export default Manual;