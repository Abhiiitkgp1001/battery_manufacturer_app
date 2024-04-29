import React from 'react'
import styled from 'styled-components'
import { primaryColor, textColor } from '../utils/colors';

const CustomButton = (props) => {
    
const Container = styled.button`
display: flex;
flex-direction: ${props.direction?? "row"};
padding: 8px 16px;
width: ${props.width};
cursor: pointer;
border-radius : 20px;
justify-content: center;
align-items: center;
background-color: ${primaryColor};
box-sizing: border-box;
font-size: ${props.fontSize?? "14px"};
font-weight: ${props.fontWeight?? "600"};
color: ${props.color?? textColor};
&:hover {
    opacity: 0.75;
}
`;
  return (
    <Container onClick={props.onClick}>
        {props.children}
    </Container>
  )
}

export default CustomButton