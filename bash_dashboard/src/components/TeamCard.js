import { Table } from 'antd';
import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { fadedColor, headingColor, tagColor1, tagColor2, whiteColor } from '../config';
import version from '../images/version.png';
const Container = styled.div`
padding: 20px 12px;
`;
const CustomTable = styled(Table)`
.ant-table-thead .ant-table-cell {
background-color: white;
font-size: 12px;
font-weight: 700;
color: ${fadedColor};
}
`;
const TableContainter = styled.div`
width: 330px;
display: flex;
min-height: 704px;
flex-direction: column;
padding: 24px 20px;
background-color: white;
box-shadow: 0px 0px 20px rgba(94, 98, 120, 0.04);
border-radius: 12px;
`;
const TeamHeadingContainer = styled.div`
display: flex;
flex-direction: row;
gap: 16px;
align-items: center;
margin-bottom: 12px;
color: ${headingColor};
`;
const ParticipantsContainer = styled.div`
display: flex;
flex-direction: row;
gap: 8px;
align-items: center;
`;
const TeamHeading = styled.div`
font-size: 24px;
font-weight: 700;
font-style: italic;
width: 226px;
`;
const CircularTeamImaga = styled.div`
width: 48px;
height: 48px;
border-radius: 50%;
background-color: #bbb;
`;
const CircularParticipantImaga = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
background-color: #bbb;
`;
const ParticipantsName = styled.div`
font-size: 11px;
font-weight: 700;
width: 70px;
opacity: 0.55;
`;
const Numbers = styled.div`
font-size: 11px;
font-weight: 400;
`;
const TagRowContainer = styled.div`
display: flex;
flex-direction: row;
gap: 12px;
margin-bottom: 18px;
justify-content: space-between;
align-items: center;
`;
const RowContainer = styled.div`
display: flex;
flex-direction: row;
gap: 12px;

`;
const VersionImage = styled.img`
width: 61px;
height: 14px;
`;
const MeasureContainer = styled.div`
display: flex;
flex-direction: column;
padding: 8px;
box-shadow: 0px 0px 20px rgba(94, 98, 120, 0.04);
border-radius: 12px;
opacity: 0.8;
`;
const MeasureNumber = styled.div`
color: ${whiteColor};
font-size: 20px;
font-weight: 600;
`;
const MeasureText = styled.div`
color: ${whiteColor};
font-size: 12px;
font-weight: 600;
`;

const tagColors = [tagColor1,tagColor2];
const columns = [
{
    title: 'Name',
    dataIndex: 'member_name',
    key: 'member_name',
    render: (text,record) => (
        <ParticipantsContainer>
            <CircularParticipantImaga/>
            <ParticipantsName>{record.captain? text+" (C) ":record.vice_captain? text+" (WK) ":text}</ParticipantsName>
        </ParticipantsContainer>
    )
},
{
    title: 'Gecks',
    dataIndex: 'unreviewed_gecks',
    key: 'unreviewed_gecks',
    render: (text,record) => (
        <Numbers>{text}</Numbers>
    )
},
{
    title: 'Components',
    dataIndex: 'unreviewed_gecks',
    key: 'components',
    render: (text,record) => (
        <Numbers>{text}</Numbers>
    )
},
];
const TeamCard = (props) => {
  const [teamTolal, setTeamTotal] = useState({});

  useEffect(() => {
   calculateSum();
  }, [props.item])
  

  const calculateSum = () => {
    let totolGecks = 0;
    let components = {};
    for(let i=0;i<props.item.members.length;i++){
        const member = props.item.members[i];
        totolGecks+= member.unreviewed_gecks;
        totolGecks+= member.actionable_gecks;
        for(let j=0;j<member.components.length;j++){
            components[member.components[j]] = true;
        }
    }
    setTeamTotal({
        "Gecks": totolGecks,
        "Components": Object.keys(components).length,
    });
  }

  return (
    <Container>
        <TableContainter>
            <TeamHeadingContainer> 
                <CircularTeamImaga/>
                <TeamHeading>{props.item.team_name}</TeamHeading>
            </TeamHeadingContainer>
            <TagRowContainer>
                <VersionImage src={version}/>
                <RowContainer>
                    {
                        Object.entries(teamTolal).map(([a,b],index)=>(
                        <MeasureContainer key={index} style={{ backgroundColor: tagColors[index] }}>
                            <MeasureNumber>{b}</MeasureNumber>
                            <MeasureText>{a}</MeasureText>
                        </MeasureContainer>))
                        
                    }
                </RowContainer>
            </TagRowContainer>
            <CustomTable 
                bordered
                style={{width: 290}}
                size='small'
                columns={columns}
                dataSource={props.item.members}
                pagination = {false}
            />
        </TableContainter>
    </Container>
  )
}

export default TeamCard