import React from 'react'

const TextTwo = (props) => {
  return (
    <div onClick={props.onClick} style={{ ...props.style, fontFamily:'Poppins' , fontSize:'14px', fontWeight:'500'}}>{props.children}</div>
  )
}

export default TextTwo