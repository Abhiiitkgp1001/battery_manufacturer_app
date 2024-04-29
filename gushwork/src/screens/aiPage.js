import React, { useState} from 'react';
import styled from 'styled-components';
import TextTwo from '../components/textTwo';
import { cardColor } from '../config';
import { RobotFilled, LoadingOutlined } from '@ant-design/icons';
import { Spin,message } from 'antd';
import { Button } from '../components/button';
import TextField from '../components/textfield';
import { aiCreateProcess } from '../apis/post/aiCreateProcess';
import { useNavigate } from 'react-router-dom';

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

const SavedContainer = styled.div`
height: 240px;
width: 300px;
gap: 12px;
display: flex;
flex-direction: column;
padding: 12px;
box-shadow: 0px 0px 20px rgba(94, 98, 120, 0.04);
border-radius: 12px;
font-size: 32px;
cursor: pointer;
align-items: center;
text-align: center;
background-color: ${cardColor};
box-sizing: border-box;
`;

const SizedBox = styled.div`
height: 20px;
`;
const AIPage = () => {
const [isSpinning, setIsSpinning] = useState(false);
const [formData, setFormData] = useState({});
const [messageApi, contextHolder] = message.useMessage();
const navigate = useNavigate();

const getAiResponse = async ()=>{
    console.log(formData.process)
    if(formData.process!==undefined && formData.process!==""){
        setIsSpinning(true);
        const response = await aiCreateProcess(formData);
        if(response.status === 200){
            console.log(response.data)
            const data = {};
            data.name = formData.process;
            const unbrokenSteps = response.data.steps.toString().split('\n\n');
            data.description = "";
            data.steps = [];
            if(unbrokenSteps.length>0){
                if(!(unbrokenSteps[0][0]>='0'&&unbrokenSteps[0][0]<='9')){
                    data.description = unbrokenSteps[0];
                }
                let steps = [];
                for(let i=0;i<unbrokenSteps.length;i++){
                    let step = unbrokenSteps[i];
                    if(step[0]>='0'&&step[0]<='9'){
                        let brokenStep = step.split(':');
                        if(brokenStep.length>1){
                            let p_name = brokenStep[0];
                            for(let j=0;j<p_name.length;j++){
                                if(p_name[j] === " "){
                                    p_name = p_name.substring(j);
                                   
                                    break;
                                }
                            }
                            p_name = p_name.trim();
                            if(p_name.length>0){
                                let p_desc = brokenStep[1].trim();
                                steps.push({
                                    name: p_name,
                                    description: p_desc
                                });
                            }
                            
                        }
                    }
                }
                data.steps = steps;
            }
            if(data.steps.length>0){
                console.log(data);
                navigate('/custom/ai',{state:data});
            }else{
                messageApi.open({
                    type: 'error',
                    content: 'something went wrong, please try angin',
                  });
            }
        }
        setIsSpinning(false);
    }
}
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({...values, [name]: value}));
  }
  return (
    <ColContainer>
        {contextHolder}
        <SizedBox/>
        <RowContainer>
            <SavedContainer>
                <RobotFilled/>
                <TextTwo>Create Using<br/>AI</TextTwo>
                <SizedBox/>
                <TextField name="process" value={formData.process || ''} placeholder="process" onChange={handleChange}/>
                <Button onClick={getAiResponse}>
                 {
                    isSpinning?<Spin indicator={<LoadingOutlined style={{ fontSize: 16, color:'white' }} spin />} />:"Submit"
                 }
                </Button>
            </SavedContainer>
        </RowContainer>
    </ColContainer>
  )
}

export default AIPage