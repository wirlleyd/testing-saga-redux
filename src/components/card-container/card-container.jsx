import React from "react";
import { Container } from "./card-container.styles";

const CardContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CardContainer;
