import React from "react";
import { ButtonContainer } from "./styles";
function Button({
  onClick,
  text = "Submit",
  type = "secondary",
  disabled = false,
  level = 4,
}) {
  return (
    <ButtonContainer
      level={level}
      onClick={!disabled && onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </ButtonContainer>
  );
}
export default Button;
