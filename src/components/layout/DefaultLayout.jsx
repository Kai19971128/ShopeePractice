import React from "react";
import styled, { css } from "styled-components";
import Header from "./header";  // 確保路徑正確
import Container from "../common/container";
import Footer from "./footer";

const DefaultLayout = ({ fixedHeader, children }) => {
    return (
        <div>
            <Header $fixed={fixedHeader}>
            </Header>
            <Container>{children}</Container>
            <Footer />
        </div>
    );
};

export default DefaultLayout;