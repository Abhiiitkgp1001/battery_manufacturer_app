import React from 'react'
import styled from 'styled-components'
import { addContainerColor, descriptionColor, dotColor, mobileShortWidth, mobileWidth, navyColor } from '../config';

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 36px;
margin-bottom: 36px;
`;

const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;



const Title3 = styled.div`
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: ${descriptionColor};
`;

const Title2 = styled.div`
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: ${navyColor};
margin-right: 16px;
`;

const BoxContainer = styled.div`
display: flex;
height: 25px;
width: 25px;
border-radius: 6px;
align-items: center;
justify-content: center;
background-color: ${addContainerColor};
cursor: pointer;
margin-right: 16px;
`;
const BoxContainer2 = styled.div`
display: flex;
height: 15px;
width: 15px;
border-radius: 6px;
align-items: center;
justify-content: center;
background-color: ${addContainerColor};
cursor: pointer;
margin-right: 12px;
`;
const BorderedContainer = styled.div`
border: 1px solid ${descriptionColor};
border-radius: 6px;
display: flex;
padding: 10px 12px;
gap: 8px;
display: flex;
flex-direction: row;
align-items: center;
margin-right: 12px;
`;
const BlueContainer = styled.div`
background-color: ${navyColor};
width: 40px;
height: 40px;
border-radius: 6px;
display: flex;
justify-content: center;
align-items: center;
`;

const DividerContainer = styled.div`
display: flex;
width: 1px;
flex: 1;
height: 28px;
flex-direction: column;
background-color: ${descriptionColor};
`;
const Banner = (props) => {
const Space = styled.div`
display: flex;
width: ${props.width<mobileShortWidth?'12px':'20px'};
`;
const TopContainer = styled.div`
display: flex;
flex-direction: ${props.width<mobileWidth?'column':'row'};
align-items: center;
gap: ${props.width<mobileWidth?'18px':'0px'};
justify-content: space-between;
`;
const Title = styled.div`
font-family: Inter;
font-size: ${props.width<mobileShortWidth?'32px':'46px'};
font-weight: 600;
line-height: 56px;
letter-spacing: 0em;
text-align: left;
color: ${dotColor};
margin-right: 20px;
`;

  return (
    <Container>
        <TopContainer>
            <TitleContainer>
                <Title>Mobile App</Title>
                <BoxContainer>
                    <img src='images/edit.png' alt='edit' style={{ height:'12.51px', width:'12.51px' }}/>
                </BoxContainer>
                <BoxContainer>
                    <img src='images/attach.png' alt='attach' style={{ height:'16px', width:'16px' }}/>
                </BoxContainer>
            </TitleContainer>
            <TitleContainer>
                <BoxContainer2>
                    <img src='images/plus.png' alt='attach' style={{ height:'8px', width:'8px' }}/>
                </BoxContainer2>
                <Title2>Invite</Title2>
                <img src='images/badge4.png' alt='b4' style={{ height:'38px', width:'158px' }}/>
            </TitleContainer>
        </TopContainer>
        <HeaderContainer>
            <TitleContainer>
                <BorderedContainer>
                    <img src='images/filter.png' alt='filter' style={{ height:'16px', width:'16px' }}/>
                    {props.width>mobileWidth && <Title3>Filter</Title3>}
                    <img src='images/down.png' alt='down' style={{ height:'16px', width:'16px' }}/>
                </BorderedContainer>
                <BorderedContainer>
                    <img src='images/calender.png' alt='calender' style={{ height:'16px', width:'16px' }}/>
                    {props.width>mobileWidth && <Title3>Today</Title3>}
                    <img src='images/down.png' alt='down' style={{ height:'16px', width:'16px' }}/>
                </BorderedContainer>
            </TitleContainer>
            <TitleContainer>
                <BorderedContainer style={{marginRight:'0px'}}>
                    <img src='images/share.png' alt='share' style={{ height:'16px', width:'16px' }}/>
                   {props.width>mobileWidth && <Title3>Share</Title3>}
                </BorderedContainer>
                <Space/>
                <DividerContainer/>
                <Space/>
                <BlueContainer>
                    <img src='images/bar.png' alt='b4' style={{ height:'20px', width:'20px' }}/>
                </BlueContainer>
                <Space/>
                <img src='images/options.png' alt='b4' style={{ height:'21px', width:'21px' }}/>
            </TitleContainer>
        </HeaderContainer>
    </Container>
  )
}

export default Banner