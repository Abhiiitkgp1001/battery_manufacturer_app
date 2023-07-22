import React, { useState } from 'react';
import styled from 'styled-components'
import { todoData } from '../DummyData';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TodoCard1 from '../components/TodoCard1';
import { addContainerColor, alignmentChangeWidth, countContainerColor, todoBackgroundColor } from '../config';

const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`;
const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
const TodoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;
const DividerContainer = styled.div`
display: flex;
height: 4px;
flex-direction: row;
margin-bottom: 20px;
`;

const ColumnContainer = styled.div`
display: flex;
border-radius: 16px;
flex-direction: column;
background: ${todoBackgroundColor};
padding: 20px;
flex: 1;
`;



const Title = styled.span`
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
margin-right: 12px;
`;

const Circle = styled.div`
display: flex;
height: 8px;
width: 8px;
border-radius: 12px;
margin-right: 8px;
`;
const CountCircle = styled.div`
display: flex;
height: 20px;
width: 20px;
border-radius: 16px;
background-color: ${countContainerColor};
font-family: Inter;
font-size: 12px;
font-weight: 500;
line-height: 15px;
align-items: center;
justify-content: center;
letter-spacing: 0em;
text-align: left;
`;
const AddContainer = styled.div`
display: flex;
height: 20px;
width: 20px;
border-radius: 6px;
align-items: center;
justify-content: center;
background-color: ${addContainerColor};
cursor: pointer;
`;
const ImageDiv = styled.img`
width: 9.5px;
height: 9.5px;
`;
const MobileApp = (props) => {
const OuterContainer = styled.div`
display: flex;
flex:1;
flex-direction: ${props.width<alignmentChangeWidth?'column' : 'row'};
gap: 20px;
justify-content: space-between;
`;
  const [taskLists, setTaskLists] = useState(todoData);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  const imgae = 'images/plus.png';
  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, taskLists, setTaskLists)}
    >
    
        <OuterContainer>
          {Object.entries(taskLists).map(([id, taskList], index) => {
            return (
              <Droppable key={id} droppableId={id}>
                {(provided, snapshot) => (
                    
                  <ColumnContainer
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <HeaderContainer>
                    <TitleContainer>
                        <Circle style={{
                            backgroundColor: taskList.color
                        }}/>
                        <Title>{taskList.title}</Title>
                        <CountCircle>{taskList.items.length}</CountCircle>
                    </TitleContainer>
                    { index == 0 && <AddContainer>
                        <ImageDiv src={imgae} alt='plus'/>
                    </AddContainer>}
                    </HeaderContainer>
                    <DividerContainer style={{
                            backgroundColor: taskList.color
                        }}/>
                    <TodoContainer>
                    {taskList.items.map((item, index) => (
                      <TodoCard1 key={index} item={item} index={index} />
                    ))}
                    </TodoContainer>
                    {provided.placeholder}
                  </ColumnContainer>
                )}
              </Droppable>
            );
          })}
        </OuterContainer>
    </DragDropContext>
  );
};

export default MobileApp;

