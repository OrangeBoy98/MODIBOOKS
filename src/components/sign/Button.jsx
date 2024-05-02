import React from "react";
import styled from "styled-components";
const StyleButton = styled.button`
background-color: #007bff;
color: #fff;
border: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
`;
function Button(props){
    const{title,onClick}=props;

    return<StyleButton onClick={onClick}>{title||"button"}</StyleButton>;
}
export default Button;