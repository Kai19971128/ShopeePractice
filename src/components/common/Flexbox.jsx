import React from "react";
import styled from "styled-components";

const Flexbox = styled.div`
    display: flex;
    flex-direction: ${props => props.direction };
    justify-content: ${props => props.justify};
    justify-items: ${props => props.justifyItems};
    justify-self: ${props => props.justifySelf};
    align-items: ${props => props.align};
    align-content: ${props => props.alignContent};
    align-self: ${props => props.alignSelf};
    flex-wrap: ${props => props.wrap};
    gap: ${props => props.gap};    
    max-width: ${props => props.maxWidth};
    height: ${props => props.height};
    margin: ${props => props.margin};
    
`;

export default Flexbox;
