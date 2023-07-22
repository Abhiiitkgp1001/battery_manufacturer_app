import React from 'react'
import styled from 'styled-components'
import { addContainerColor, alignmentChangeWidth, borderColor, descriptionColor, dotColor, mobileWidth, navyColor, searchContainerColor, sidebarCollapseWidth } from '../config';


const InfoContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
const NameContainer = styled.div`
display: flex;
flex-direction: column;
`;
const SearchContainer = styled.div`
display: flex;
flex-direction: row;
height: 44px;
width: 400px;
align-items: center;
background-color: ${searchContainerColor};
border-radius: 6px;
`;
const Space = styled.div`
display: flex;
width: 20px;
`;
const Space2 = styled.div`
display: flex;
width: 12px;
`;
const SearchPlaceholder = styled.div`
ffont-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: right;
color: ${descriptionColor};
`;
const Name = styled.div`
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: right;
color: ${dotColor};
margin-bottom: 4px;
`;
const BackContainer = styled.div`
display: flex;
flex-direction: row;
gap: 24px;
align-items: center;
`;


const Navbar = (props) => {
const Container = styled.div`
display: flex;
flex-direction: row;
padding: ${props.width<mobileWidth?'20px 16px':'20px 36px' };
height: 85px;
align-items: center;
justify-content: space-between;
`;
  return (
    <Container>
        <BackContainer>
        { (props.collapse || props.width<sidebarCollapseWidth) && 
            <img onClick={()=>{props.width<sidebarCollapseWidth? props.setOpen() :props.setCollapse();}} src='images/left.png' alt='logo' style={{ height:'20px', width:'26px', cursor:'pointer' }}/>
            }
        {props.width>alignmentChangeWidth && <SearchContainer>
            <Space/>
            <img src='images/search.png' alt='search' style={{ height:'22px', width:'22px' }}/>
            <Space/>
            <SearchPlaceholder>Search for anything...</SearchPlaceholder>
        </SearchContainer> }
        </BackContainer>
        { props.width> mobileWidth ? <InfoContainer>
            {
                props.width<alignmentChangeWidth && <img src='images/search.png' alt='search' style={{ height:'22px', width:'22px', marginRight:'20px' }}/>
            }
            <img src='images/calender2.png' alt='search' style={{ height:'24px', width:'24px' }}/>
            <Space/>
            <img src='images/question.png' alt='search' style={{ height:'24px', width:'24px' }}/>
            <Space/>
            <img src='images/notification.png' alt='search' style={{ height:'24px', width:'24px' }}/>
            <Space/>
            <Space/>
            <NameContainer>
                <Name>Anima Agrawal</Name>
                <SearchPlaceholder>U.P, India</SearchPlaceholder>
            </NameContainer>
            <Space/>
            <img src='images/user.png' alt='search' style={{ height:'38px', width:'38px' }}/>
            <Space2/>
            <img src='images/down.png' alt='search' style={{ height:'18px', width:'18px' }}/>
        </InfoContainer> : 
        <InfoContainer>
             <img src='images/search.png' alt='search' style={{ height:'22px', width:'22px' }}/>
            <Space/>
            <img src='images/user.png' alt='search' style={{ height:'38px', width:'38px' }}/>
        </InfoContainer>
        }
    </Container>
  )
}

export default Navbar