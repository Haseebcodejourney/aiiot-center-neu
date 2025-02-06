import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 11px 18px;
  font-size: 14px;
  border: 1px solid #E9E9E9;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: #222222;
  
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
