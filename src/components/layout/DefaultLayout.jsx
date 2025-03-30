import React from "react";
import styled, { css } from "styled-components";
import Header from "./header";

const PageHeader = styled.div`
    ${(props) => props.$fixed && css`
        position: fixed;
     
       
    
    `}

`

const DefaultLayout = ({ fixedHeader, children }) => {
    return (
        <div>
            <PageHeader $fixed={fixedHeader}>
                <Header />
            </PageHeader>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    );
};

export default DefaultLayout;
