import React from "react";
import { ButtonStyle } from "./styled-button.styled";

const ButtonStyled = ({ description, ...otherProps }) => {
  return <ButtonStyle {...otherProps}>{description}</ButtonStyle>;
};

export default ButtonStyled;
