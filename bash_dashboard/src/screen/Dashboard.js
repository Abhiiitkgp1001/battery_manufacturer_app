import React, {useState} from 'react'
import styled from "styled-components";
import { Col, Row } from 'antd';
import { data } from '../DummyData';
import TeamCard from '../components/TeamCard';
import Header from '../components/Header';
import { fadedColor, selectedColor, whiteColor } from '../config';
const RoundContainer = styled.div`
width: 130px;
height: 70px;
display: flex;
flex-direction: column;
padding: 24px 20px;
box-shadow: 0px 0px 20px rgba(94, 98, 120, 0.04);
font-size: 16px;
font-weight: 700;
border-radius: 12px;
cursor: pointer;
opacity: 0.8;
`;
const Footer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
padding: 12px;
font-size: 12px;
font-weight: 600;
color: ${fadedColor};
`;

const team_data = data;
const rounds = [
    {
        round_name:"Round 1"
    },
    {
        round_name:"Round 2"
    },
    {
        round_name:"Round 3"
    },
    {
        round_name:"Total"
    }
];

const Dashboard = () => {
const [selectedIndex, setSelectedIndex] = useState(3);
  return (
    <div>
        <Header/>
        <Row style={{ padding:'0px 20px'}}>
            {
                rounds.map((item,index) => (
                    <RoundContainer onClick={()=>{
                        setSelectedIndex(index);
                    }} style={{
                        backgroundColor: selectedIndex === index ? selectedColor : whiteColor,
                        color: selectedIndex === index ? whiteColor : fadedColor,
                    }} key={index}>{item.round_name}</RoundContainer>
                ))
            }
        </Row>
        <Row>
            {
                team_data.map((item,index)=>(
                    <Col key={index}>
                        <TeamCard item={item}/>
                    </Col>
                ))
            }
        </Row>
        <Footer>
          MathWorks ©2023 Created by MathWorks HYD
        </Footer>
    </div>
  )
}

export default Dashboard