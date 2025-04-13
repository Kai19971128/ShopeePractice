import React from "react";
import styled, { css } from "styled-components";
import Header from "./header";  // 確保路徑正確
import Container from "../common/container";
import Footer from "./footer";

const LayoutWrapper=styled.div`
    width: 100%;
`

const DefaultLayout = ({ fixedHeader, children }) => {
    return (
        <LayoutWrapper>
            <Header $fixed={fixedHeader}>
            </Header>
            <Container>{children}</Container>
            <Footer />
        </LayoutWrapper>
    );
};

export default DefaultLayout;