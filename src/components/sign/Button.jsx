import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;  // 호버 효과 추가
  }
`;

function Button({ title, onClick, className }) {
    return <StyleButton className={className} onClick={onClick}>
        {title || "button"}
    </StyleButton>;
}

export default Button;
