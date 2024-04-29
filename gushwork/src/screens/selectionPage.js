import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import TextTwo from '../components/textTwo';
import { cardColor, primaryColor, secondaryColor } from '../config';
import { RobotFilled, AppstoreFilled } from '@ant-design/icons';
import TextThree from '../components/textThree';
import { useNavigate } from 'react-router-dom';
import { getProcesses } from '../apis/get/getProcesses';

const RowContainer = styled.div`
display: flex;
flex-direction: row;
gap: 12px;
justify-content: center;
box-sizing: border-box;
width: 100%;`;
const ColContainer = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
justify-content: center;
box-sizing: border-box;
width: 100%;
`;
const SizedBox = styled.div`
height: 32px;
`;
const FeatureContainer = styled.div`
height: 112px;
width: 132px;
gap: 12px;
display: flex;
flex-direction: column;
padding: 16px;
box-shadow: 0px 0px 20px rgba(94, 98, 120, 0.04);
border-radius: 12px;
font-size: 30px;
cursor: pointer;
background-color: ${cardColor};
box-sizing: border-box;
&:hover {
    background-color: ${primaryColor};
    color: ${cardColor};
}
`;
const SavedContainer = styled.div`
width: 330px;
gap: 12px;
display: flex;
flex-direction: column;
padding: 12px;
box-shadow: 0px 0px 20px rgba(94, 98, 120, 0.04);
border-radius: 12px;
font-size: 32px;
cursor: pointer;
background-color: ${cardColor};
box-sizing: border-box;
`;
const TagContainer = styled.div`
padding: 6px 12px;
border-radius: 12px;
box-sizing: border-box;
background-color: ${primaryColor};
color: ${cardColor};
`;
const ProcessContainer = styled.div`
padding: 6px 12px;
border-radius: 12px;
box-sizing: border-box;
font-size: 12px;
background-color: ${secondaryColor};
`;
const SelectionPage = () => {
const navigate = useNavigate();
const [process, setProcess] = useState([]);
useEffect(() => {
  
    getAllProcesses();
  
}, [])

const getAllProcesses = async () => {
    const response = await getProcesses();
    
    if(response.status == 200){
        console.log(response.data);
        setProcess(response.data.processes);
    }
}
  return (
    <ColContainer>
        <SizedBox/>
        <RowContainer>
            <FeatureContainer onClick={()=>navigate('/ai')}>
                <RobotFilled/>
                <TextTwo>Create Using<br/>AI</TextTwo>
            </FeatureContainer>
            <FeatureContainer onClick={()=>navigate('/custom/new')}>
                <AppstoreFilled/>
                <TextTwo>Custom Process</TextTwo>
            </FeatureContainer>
        </RowContainer>
        <RowContainer>
            <SavedContainer>
               <TagContainer>
                <TextThree>Saved Processes</TextThree>
               </TagContainer>
               {
                    process.map((item, index)=>(
                        <ProcessContainer key={index} onClick={()=>navigate(`/custom/${item._id}`, {state: item})}>
                            <span style={{fontWeight: 600}}>{item.name}</span>
                            <br/>
                            {item.description}
                        </ProcessContainer>
                    ))
                }
            </SavedContainer>
        </RowContainer>
    </ColContainer>
  )
}

export default SelectionPage