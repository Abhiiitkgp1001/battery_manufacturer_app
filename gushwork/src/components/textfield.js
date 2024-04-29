import React from 'react'
import styled from 'styled-components'

const CustomInput = styled.input`
display: flex;
border: none;
width: 100%;
&:focus {
    outline: none !important;
}
`;

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 6px 8px;
width: 100%;
border : 1px solid #9BBEC8;
border-radius : 6px;
background-color: #fff;
box-sizing: border-box;
`;
const TextField = (props) => {
    
  return (
    <Container>
        <CustomInput value={props.value} onInput={props.onInput} pattern={props.pattern} name={props.name} placeholder={props.placeholder} onChange={props.onChange}/>
    </Container>
  )
}

export default TextField