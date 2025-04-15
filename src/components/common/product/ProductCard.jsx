import React from "react";
import { Card } from 'antd';
import styled from 'styled-components';

const SquareCard = styled.div`
    padding-top:100%;
    background-position: center;
    background-image:${(props) => `url(${props.url})`};
    background-size: cover;
    width: 100%;
`
const ListPirceLabel = styled.span`
    color:#757575;
    text-decoration: line-through;
    margin-right: 4px;
 `
const SalePirceLabel = styled.span`
    color:#d1011c;
`
const ProductCard = ({
    coverUrl, 
    title,
    listPrices,
    salePrices,
    discountPrecentage,
    salesNumber,
    rating,
    isLiked
}) =>{
    return (
        <Card
        hoverable
        style={{
          
        }}
        cover={<SquareCard url={coverUrl} />}
      >
        <Card.Meta title={title} description={<div>
            {listPrices && listPrices.length > 0 && (
                <ListPirceLabel>${listPrices[0]}</ListPirceLabel>)}
            {salePrices && salePrices.length > 0 && (
                <SalePirceLabel> ${salePrices[0]}</SalePirceLabel>)}
        </div>} />
      </Card>

)}

export default ProductCard