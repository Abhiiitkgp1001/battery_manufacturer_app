import React from 'react'

const TextThree = (props) => {
  return (
    <div onClick={props.onClick} style={{ ...props.style, fontFamily:'Poppins' , fontSize:'12px', fontWeight:'400'}}>{props.children}</div>
  )
}

export default TextThree