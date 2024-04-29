import React from 'react'
import styled from 'styled-components'
import { inputBorderColor, inputTextColor } from '../color';
import CustomRow from './RowContaner';
import EyeClosed from "../assets/images/eye_closed.png"
const CustomInput = styled.input`
display: flex;
flex: 1;
border: none;
width: 100%;
&:focus {
    outline: none !important;
}
padding: 14px 12px;
font-family: Poppins;
font-size: 12px;
font-weight: 500;
color: ${inputTextColor};
`;

const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%;
border : 1px solid ${inputBorderColor};
border-radius : 4px;
background-color: transparent;
box-sizing: border-box;
`;

const EyeClose = styled.img`
width: 18px;
`;

const Suffix = styled.div`
font-size: 12px;
font-weight: 500;
font-family: Poppins;
`;

const Bar = styled.div`
height: 100%;
width: 1px;
background-color: ${inputBorderColor};
`;
const Phone = (props) => {
    
  return (
    <Container id={props.id}>
        <CustomRow gap="12px" width='' padding="14px 12px">
            <Suffix>+91</Suffix>
        </CustomRow>
        <Bar/>
        <CustomInput value={props.value} ref={props.ref} onInput={props.onInput} pattern={props.pattern} type={props.type} maxLength={props.maxLength} name={props.name} placeholder={props.placeholder} onChange={props.onChange}/>
    </Container>
  )
}

export default Phone