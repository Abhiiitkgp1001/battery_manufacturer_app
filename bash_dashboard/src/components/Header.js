import React from 'react'
import styled from "styled-components";
import logo from '../images/logo.png';
import { headingColor, mwBlue } from '../config';
import { Row } from 'antd';

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 24px 20px;
`;
const HeaderLogo = styled.img`
width: 187px;
height: 35px;
`;
const HeaderText = styled.div`
font-size: 32px;
font-weight: 500;
color: ${mwBlue};
`;
const RowContainer = styled(Row)`
display: flex;
flex-direction: ${window.innerWidth<500?"column-reverse":"row"};
justify-content: space-between;
flex:1;
gap: 12px;
align-items: center;
`;

const Header = () => {
  return (
    <Container>
        <RowContainer>
        <HeaderText>Bash<span style={{
              color: headingColor,
          }}>Dashboard</span></HeaderText>
          <div/>
          <HeaderLogo src={logo} />
          
        </RowContainer>
        
    </Container>
  )
}

export default Header