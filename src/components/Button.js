import React from "react";
import styled from "styled-components";
import { useTheme } from "../theme/ThemeProvider";

const StyledButton = styled.button`
  padding: 16px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  border: none;
  line-height: 28px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ theme, variant }) => 
    variant === "primary"
      ? theme.primary
      : variant === "secondary"
      ? theme.secondary
      : theme.danger};
  
  color: ${({ theme }) => theme.text}; 

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ children, variant = "primary", ...props }) => {
  const { theme } = useTheme(); // Access theme values

  return (
    <StyledButton theme={theme} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
