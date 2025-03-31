import React from "react";
import styled from "styled-components";
import Container from "../common/container";
const HeaderWrapper = styled.header`
    display: flex;
    background-color: #d1011c;
    height: 200px;
    width: 100vw;
    padding:0;
`;


const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <h1>Header</h1>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;