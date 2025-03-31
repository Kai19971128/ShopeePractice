import React from "react";
import styled from "styled-components";
import Container from "../common/container";
const FooterWrapper = styled.footer`
   width: 100vw;
   height: 100px;
   background-color: #fbfbfb;
   padding:40px 0 20px 0;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <h1>Footer</h1>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;