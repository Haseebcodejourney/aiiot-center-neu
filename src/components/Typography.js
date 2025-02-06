import React from "react";
import styled from "styled-components";

const StyledTypography = styled.p`
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  color: ${({ color }) => color || "#333333"};
  line-height: 1.5;
`;

const StyledText = styled.span`
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
  color: ${({ color }) => color || "#333333"};
`;

const StyledBold = styled.strong`
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  color: ${({ color }) => color || "#000000"};
  font-weight: bold;
`;

const StyledTitle = styled.h2`
  font-size: ${({ size }) => (size ? `${size}px` : "28px")};
  font-weight: bold;
  color: ${({ color }) => color || "#222222"};
`;

const Typography = ({ children, size, color }) => {
  return (
    <StyledTypography size={size} color={color}>
      {children}
    </StyledTypography>
  );
};

const Text = ({ children, size, color }) => {
  return (
    <StyledText size={size} color={color}>
      {children}
    </StyledText>
  );
};

const Bold = ({ children, size, color }) => {
  return (
    <StyledBold size={size} color={color}>
      {children}
    </StyledBold>
  );
};

const Title = ({ children, size, color }) => {
  return (
    <StyledTitle size={size} color={color}>
      {children}
    </StyledTitle>
  );
};

export { Typography, Text, Bold, Title };
