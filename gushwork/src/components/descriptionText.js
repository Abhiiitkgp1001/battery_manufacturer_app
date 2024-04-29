import React from 'react'
import { greyColor } from '../config'

const DescriptionText = (props) => {
  return (
    <div onClick={props.onClick} style={{ ...props.style, fontFamily:'Poppins' , fontSize:'12px', fontWeight:'600', color: greyColor}}>{props.children}</div>
  )
}

export default DescriptionText