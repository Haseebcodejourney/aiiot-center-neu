import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  padding: 32px;
  border-radius: 4px;
  color: red;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;

const Box = ({ children, bg, width, height }) => {
  return <StyledBox bg={bg} width={width} height={height}>{children}</StyledBox>;
};

export default Box;
