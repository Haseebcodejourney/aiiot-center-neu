import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: ${({ variant }) => (variant === "disc" ? "disc" : variant === "circle" ? "circle" : "none")};
  padding-left: 20px;
  color: ${({ color }) => color || "#333"};
`;

const StyledListItem = styled.li`
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  color: ${({ color }) => color || "inherit"};
  padding: 5px 0;
`;

const List = ({ children, variant = "disc", color }) => {
  return <StyledList variant={variant} color={color}>{children}</StyledList>;
};

const ListItem = ({ children, size, color }) => {
  return <StyledListItem size={size} color={color}>{children}</StyledListItem>;
};

export { List, ListItem };
