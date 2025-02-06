import React from "react";
import styled from "styled-components";
import { useTheme } from "../theme/ThemeProvider";

const StyledDiv = styled.div`
  padding: ${({ padding }) => padding || "16px"};
  margin: ${({ margin }) => margin || "0"};
  display: ${({ display }) => display || "block"};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const Div = (props) => {
  const { theme } = useTheme();
  return <StyledDiv theme={theme} {...props} />;
};

const StyledSection = styled.section`
  width: 100%;
  padding: ${({ padding }) => padding || "20px"};
  background-color: ${({ theme }) => theme.sectionBg};
`;

export const Section = (props) => {
  const { theme } = useTheme();
  return <StyledSection theme={theme} {...props} />;
};

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.cardBg};
`;

export const Card = (props) => {
  const { theme } = useTheme();
  return <StyledCard theme={theme} {...props} />;
};

const StyledFigure = styled.figure`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Figure = (props) => <StyledFigure {...props} />;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
`;

export const Image = (props) => <StyledImage {...props} />;
