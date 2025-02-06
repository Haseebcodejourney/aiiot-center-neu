import React from "react";
import styled from "styled-components";

const HoverDiv = styled.div`
  padding: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f8f9fa;
    transform: scale(1.05);
  }
`;

const HoverEffect = ({ children }) => {
  return <HoverDiv>{children}</HoverDiv>;
};

export default HoverEffect;
