import React from "react";
import styled from "styled-components";

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
            <h1>Header</h1>
        </HeaderWrapper>
    );
};

export default Header;