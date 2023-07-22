import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'
import { descriptionColor, dotColor, priorityColor } from '../config';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 20px;
border-radius: 16px;
background: white;
`;
const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: end;
flex: 1;
width: 100%;
margin-bottom: 5px;
justify-content: space-between;
`;
const PriorityContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
border-radius: 4px;
padding: 4px 6px;
font-family: Inter;
font-size: 12px;
font-weight: 500;
line-height: 15px;
letter-spacing: 0em;
`;
const Title = styled.div`
font-family: Inter;
font-size: 18px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0em;
margin-bottom: 7px;
`;
const Dot = styled.div`
color: ${dotColor};
font-family: Inter;
font-size: 16px;
font-weight: 800;
line-height: 19px;
letter-spacing: -0.07em;
`;
const DescriptionContainer = styled.div`
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
color: ${descriptionColor};
`;
const BottomContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
margin-top: 24px;
justify-content: space-between;
`;
const InfoContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
const Commentimage = styled.img`
width: 16px;
height: 16px;
margin-right: 6px;
`;
const InfoTextContainer = styled.div`
font-family: Inter;
font-size: 12px;
font-weight: 500;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
margin-right: 8px;
color: ${descriptionColor};
`;
const ImageDiv = styled.img`
height: auto;
width: 100%;
`;
const TodoCard1 = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Container>
            <TitleContainer>
              <PriorityContainer style={{
                backgroundColor: priorityColor[item.priority]['background'],
                color: priorityColor[item.priority]['text'],
              }}>{item.priority}</PriorityContainer>
              <Dot>...</Dot>
            </TitleContainer>
            <Title>{item.title}</Title>
            <DescriptionContainer>{item.description}</DescriptionContainer>
            {
              item.images ? 
              <ImageDiv src={item.images}/>
              : <div></div>
            }
            <BottomContainer>
              <img src={item.avatar} alt='badge' style={{ height : item.height, width: item.width }}/>
              <InfoContainer>
                <Commentimage src='images/comment.png' alt='comment'/>
                <InfoTextContainer>{item.comments} comments</InfoTextContainer>
                <Commentimage src='images/files.png' alt='files' />
                <DescriptionContainer>{item.files} files</DescriptionContainer>
              </InfoContainer>
            </BottomContainer>
          </Container>
        </div>
      )}
    </Draggable>
  );
};

export default TodoCard1;
