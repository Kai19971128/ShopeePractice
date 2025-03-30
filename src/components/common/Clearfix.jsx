import React from "react";
import styled from "styled-components";

const Clearfix = styled.div`
    height: ${(props) => props.$height || "200px"};
`;
export default Clearfix;
