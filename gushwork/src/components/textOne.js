import React from 'react'

const TextOne = (props) => {
  return (
    <div onClick={props.onClick} style={{ ...props.style, fontFamily:'Poppins' , fontSize:'16px', fontWeight:'500' }}>{props.children}</div>
  )
}

export default TextOne