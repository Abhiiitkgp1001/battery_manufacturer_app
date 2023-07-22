import React, {useState} from 'react'
import styled from 'styled-components'
import { addContainerColor, borderColor, descriptionColor, dotColor, menuItemHoverColor, navyColor, sidebarCollapseWidth, todoBackgroundColor } from '../config';
import { menuList, projectList } from '../DummyData';


const Container = styled.div`
display: flex;
flex-direction: column;
`;
const LogoContainer = styled.div`
display: flex;
flex-direction: row;
height: 86px;
border: 0.5px solid ${borderColor};
align-items: center;
padding: 0px 20px;
justify-content: space-between;
`;
const NameContainer = styled.div`
display: flex;
flex-direction: row;
gap: 12px;
`;

const ProjectContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 0px 12px;
margin-bottom: 8px;
`;
const ProjectTitle = styled.div`
font-family: Inter;
font-size: 12px;
font-weight: 700;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
color: ${descriptionColor};
`;
const Name = styled.div`
font-family: Inter;
font-size: 20px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: ${dotColor};
`;
const MenuContainer = styled.div`
display: flex;
flex-direction: column;
border: 0.5px solid ${borderColor};
align-items: center;
padding: 16px 8px;
gap: 8px;
`;

const MeneName = styled.div`
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: ${descriptionColor};
`;
const DividerContainer = styled.div`
display: flex;
height: 1px;
width: 100%;
margin: 20px 0px;
background-color: ${borderColor};
`;
const Circle = styled.div`
display: flex;
height: 8px;
width: 8px;
border-radius: 12px;
`;
const BulbContainer = styled.div`
display: flex;
height: 66px;
width: 66px;
border-radius: 32px;
justify-content: center;
align-items: center;
background-color: ${todoBackgroundColor};
position: relative;
top: 33px;
`;
const Dot = styled.div`
font-family: Inter;
font-size: 16px;
font-weight: 800;
line-height: 19px;
letter-spacing: -0.07em;
text-align: left;
color: ${dotColor};
display: flex;
justify-content: flex-end;
flex-direction: row;
flex: 1;
`;
const ThoughtContainer = styled.div`
display: flex;
flex-direction: column;
padding: 20px 12px;
align-items: center;
`;
const ThoughtInnerContainer = styled.div`
display: flex;
padding: 20px;
flex-direction: column;
align-items: center;
border-radius: 16px;
background-color: ${todoBackgroundColor};
`;
const ThoughtTilte = styled.div`
font-family: Inter;
font-size: 14.5px;
font-weight: 500;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color: ${dotColor};
margin-bottom: 12px;
margin-top: 20px;
`;
const ThoughtDescription = styled.div`
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 15px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 12px;
color: ${descriptionColor};
`;
const MessagesContainer = styled.div`
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
display: flex;
align-items: center;
cursor: pointer;
padding: 8px;
width: 100%;
background-color: white;
flex-direction: column;
border-radius: 4px;
&:hover {
    background-color: ${menuItemHoverColor};
}
`;
const SideMenu = (props) => {

const MenuItem = styled.div`
display: flex;
flex-direction: row;
gap: 16px;
align-items: center;
width: ${props.width<sidebarCollapseWidth? '88%' : '100%'};
padding: 10px 12px;
cursor: pointer;
border-radius: 6px;
&:hover {
    background-color: ${menuItemHoverColor};
}
`;
  return (
    <Container>
        <LogoContainer>
            <NameContainer>
                <img src='images/logo.png' alt='logo' style={{ height:'24px', width:'24px' }}/>
                <Name>Project M.</Name>
            </NameContainer>
            <img onClick={()=>{ props.width<sidebarCollapseWidth? props.setOpen() : props.setCollapse()}} src='images/right.png' alt='logo' style={{ height:'20px', width:'26px', cursor:'pointer' }}/>
        </LogoContainer>
        <MenuContainer>
            {
                menuList.map((item,index)=>{
                    return (
                        <MenuItem >
                            <img src={item.icon} alt='menu_logo' style={{ height:'24px', width:'24px' }}/>
                            <MeneName>{item.text}</MeneName>
                        </MenuItem>
                    );
                })
            }
            <DividerContainer/>
            <ProjectContainer>
                <ProjectTitle>MY PROJECTS</ProjectTitle>
                <img src='images/add2.png' alt='add' style={{ height:'16px', width:'16px' }}/>
            </ProjectContainer>
            {
            projectList.map((item,index)=>{
                    return (
                        <MenuItem style={{
                            backgroundColor: index == 0 ? menuItemHoverColor: null,
                        }}>
                            <Circle style={{ backgroundColor:item.color}}/>
                            <MeneName style={{
                                color: index == 0 ? dotColor: descriptionColor,
                            }}>{item.text}</MeneName>
                            {index==0 && <Dot>...</Dot>}
                        </MenuItem>
                    );
                })
            }
            <ThoughtContainer>
                <BulbContainer>
                    <img src='images/bulb.png' alt='add' style={{ height:'112px', width:'112px' }}/>
                </BulbContainer>
                <ThoughtInnerContainer>
                    <ThoughtTilte>Thoughts Time</ThoughtTilte>
                    <ThoughtDescription>We don’t have any notice for you, till then you can share your thoughts with your peers.</ThoughtDescription>
                    <MessagesContainer>Write a message</MessagesContainer>
                </ThoughtInnerContainer>
            </ThoughtContainer>
        </MenuContainer>
    </Container>
  )
}

export default SideMenu