import  styled  from "styled-components";
import { primaryColor } from "../config";
export const Button = styled.div`
display: flex;
padding: 4px 12px;
background-color: ${primaryColor};
border-radius: 6px;
color: #fff;
cursor: pointer;
font-size: 12px;
justify-content: center;
align-items: center;
font-weight : 600;
&:hover{
  opacity: 0.75;
}
`;