import React from "react";
import styled from "styled-components";


const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    max-width: 100%;
    box-sizing: border-box;
    padding: 16px;
    
    @media screen and (max-width: 769px) {
        width: 90%;
    }
`;

export default Container;