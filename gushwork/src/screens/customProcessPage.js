import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { Button } from '../components/button';
import CustomModal from '../components/modal';
import TextOne from '../components/textOne';
import DescriptionText from '../components/descriptionText';
import { cardColor, primaryColor, secondaryColor, tagColor } from '../config';
import TextTwo from '../components/textTwo';
import TextThree from '../components/textThree';
import { EditFilled,DeleteFilled,UpCircleOutlined,DownCircleOutlined,LoadingOutlined } from '@ant-design/icons';
import { Spin,message } from 'antd';
import { saveProcess } from '../apis/post/saveProcess';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const ColContainer = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
padding: 20px 12px;
justify-content: center;
align-items: center;
width: 100%;
box-sizing: border-box;`;
const RowContainer = styled.div`
display: flex;
flex-direction: row;
gap: 12px;
justify-content: space-between;
align-items: center;
width: 100%;`;
const StepContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 8px;
max-width: 700px;
box-shadow: 0px 0px 20px rgba(94, 98, 120, 0.04);
border-radius: 8px;
background-color: ${secondaryColor};
box-sizing: border-box;
`;
const ProcessContainer = styled.div`
width: 100%;
display: flex;
padding: 14px;
max-width: 700px;
margin-bottom: 12px;
flex-direction: column;
box-shadow: 0px 0px 20px rgba(94, 98, 120, 0.04);
border-radius: 12px;
background-color: ${cardColor};
box-sizing: border-box;
`;
const IconColContainer = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
justify-content: center;
align-items: center;
width: 60px;
box-sizing: border-box;`;
const IconRowContainer = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
justify-content: center;
align-items: center;
width: 100%;
box-sizing: border-box;`;
const SizedBox = styled.div`
height: 24px;
`;
const TagContainer = styled.div`
padding: 2px 4px;
border-radius: 12px;
font-size: 8px;
display: flex;
flex-direction : row;
justify-content: center;
width: 50px;
margin-bottom: 4px;
font-weight: 600;
box-sizing: border-box;
background-color: ${tagColor};
color: ${cardColor};
`;
const CustomProcessPage = (props) => {
const navigate = useNavigate();
const {processId} = useParams();
const location = useLocation();
const [isSpinning, setIsSpinning] = useState(false);
const [messageApi, contextHolder] = message.useMessage();
const [process, setProcess] = useState({});
const [steps, setSteps] = useState([]);
const [currentStep, setCurrentStep] = useState({});
const [stepsIndex, setStepsIndex] = useState(-1);
const [isModalOpen, setIsModalOpen] = useState(false);
const [isStepModalOpen, setIsStepModalOpen] = useState(false);
const [created, setCreated] = useState(false);
const closeModal = () => {
    setIsModalOpen(false);
};  
const handleCreate = () => {
    setIsModalOpen(true);
}
const createProcess = (formData) => {
    console.log(formData);
    setProcess(formData);
    setCreated(true);
    setIsModalOpen(false);
}

const closeStepModal = () => {
    setIsStepModalOpen(false);
};  
const handleStepAdd = () => {
    setCurrentStep({});
    setStepsIndex(steps.length);
    setIsStepModalOpen(true);
}
const handleStepEdit = (index) => {
    setStepsIndex(index);
    setIsStepModalOpen(true);
    setCurrentStep(steps[index]);
}
 
const handleStepChange = (formdata) => {
    let changedSteps = [...steps];
    changedSteps[stepsIndex] = formdata;
    setSteps(changedSteps);
    setIsStepModalOpen(false);
}
const handleStepDelete = (index) => {
    let changedSteps = [...steps];
    changedSteps.splice(index,1);
    setSteps(changedSteps);
}
const moveArrayItemUp = (index) => {
    let changedSteps = [...steps];
    if (index > 0 && index < changedSteps.length) {
        const itemToMove = changedSteps.splice(index, 1)[0];
        changedSteps.splice(index - 1, 0, itemToMove);
    }
    setSteps(changedSteps);
}
  
const moveArrayItemDown = (index) => {
    let changedSteps = [...steps];
    if (index >= 0 && index < changedSteps.length - 1) {
      const itemToMove = changedSteps.splice(index, 1)[0];
      changedSteps.splice(index + 1, 0, itemToMove);
    }
    setSteps(changedSteps);
}

const save = async () => {
    setIsSpinning(true);
    const data = {
        name: process.name,
        description: process.description,
        steps:[]
    };
    for(let i=0;i<steps.length;i++){
        data.steps.push({
            number: i+1,
            name: steps[i].name,
            description: steps[i].description
        });
    }
    let response;
    if(processId === "new" || processId === "ai"){
        response = await saveProcess(data);
    }else{
        response = await saveProcess(data,processId);
    }
    if(response.status == 200){
        setIsSpinning(false);
        messageApi.open({
            type: 'success',
            content: 'saved',
          });
          navigate('/');
    }else{
        setIsSpinning(false);
        messageApi.open({
            type: 'error',
            content: 'something went wrong',
          });
    }
}

useEffect(() => {
  console.log(processId);
  if(processId !== "new"){
    const data = location.state;
    setProcess({
        name: data.name,
        description: data.description,
    });
    const step = data.steps;
    let changedSteps = [];
    for(let i=0;i<step.length;i++){
        changedSteps.push({
            name: step[i].name,
            description: step[i].description,
        })
    }
    setSteps(changedSteps);
    setCreated(true);
  }

 
}, [])


return (
    <ColContainer>
    {contextHolder}
        <RowContainer>
            <TextOne>Custom Process</TextOne>
            <Button onClick={handleCreate}>{created?"Edit process" :"Create +"}</Button>
            <CustomModal heading="Process Details" formData={process} open={isModalOpen} closeModal={closeModal} buttonName="Create +" create={createProcess}/>
        </RowContainer>
        {
            created &&
            <ColContainer>
                <ProcessContainer>
                    <TextOne>{process.name}</TextOne>
                    <DescriptionText>{process.description}</DescriptionText>
                </ProcessContainer>
                {steps.map((item,index)=>(
                    <ProcessContainer key={index}>
                        <RowContainer>
                            <StepContainer>
                                <TagContainer>Step {index+1}</TagContainer>
                                <TextTwo>{item.name}</TextTwo>
                                <TextThree>{item.description}</TextThree>
                            </StepContainer>
                            <IconColContainer>
                                <IconRowContainer>
                                    <UpCircleOutlined onClick={()=>moveArrayItemUp(index)}/>
                                    <DownCircleOutlined onClick={()=>moveArrayItemDown(index)}/>
                                </IconRowContainer>
                                <IconRowContainer>
                                    <EditFilled onClick={()=>handleStepEdit(index)}/>
                                    <DeleteFilled onClick={()=>handleStepDelete(index)}/>
                                </IconRowContainer>
                           </IconColContainer>
                        </RowContainer>
                    </ProcessContainer>
                ))}
                <RowContainer>
                    <div></div>
                    <Button onClick={handleStepAdd}>+</Button>
                    <CustomModal heading="Step Details" formData={currentStep} open={isStepModalOpen} closeModal={closeStepModal} buttonName="Create +" create={handleStepChange}/>
                </RowContainer>
                <SizedBox/>
                {steps.length>0 && <Button onClick={save}>
                 {
                    isSpinning?<Spin indicator={<LoadingOutlined style={{ fontSize: 16, color:'white' }} spin />} />:"Submit"
                 }
                
                
                </Button>}
            </ColContainer>
        }
    </ColContainer>
        

  )
}

export default CustomProcessPage