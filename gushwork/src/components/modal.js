import React, {useEffect, useState} from 'react'
import { Modal } from 'antd';
import  styled  from "styled-components";
import TextThree from './textThree';
import TextField from './textfield';
import { Button } from './button';
const ColContainer = styled.div`
display: flex;
flex-direction: column;
gap: 6px;
justify-content: center;
width: 100%;
box-sizing: border-box;`;
const RowContainer = styled.div`
display: flex;
flex-direction: row;
gap: 2px;
justify-content: space-between;
width: 100%;`;
const SizedBox = styled.div`
height: 8px;
`;

const CustomModal = (props) => {
  const [formData, setFormData] = useState({})  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({...values, [name]: value}));
  }

  useEffect(() => {
    setFormData(props.formData);
  }, [props.open])
  
  const sumbit = () =>{
    if(formData.name!==undefined && formData.description!==undefined
        && formData.name!== "" && formData.description!=""){
            props.create(formData);
        }
  }

  return (
    <Modal style={{ maxWidth:300 }} title={props.heading} open={props.open} footer="" onOk={()=>{}} onCancel= {props.closeModal}>
       <ColContainer>
        <TextThree>Name</TextThree>
        <TextField name="name" value={formData.name || ''} placeholder="name" onChange={handleChange}/>
        <TextThree>Description</TextThree>
        <TextField name="description" value={formData.description || ''} placeholder="description" onChange={handleChange}/>
        <SizedBox/>
        <Button onClick={sumbit}>{props.buttonName}</Button>
       </ColContainer>
    </Modal>
  )
}

export default CustomModal