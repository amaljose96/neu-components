import React from "react";
import { DropdownContainer, DropdownLabel, DropdownComponent } from "./styles";
function Dropdown({
  label = "Dropdown",
  options = [],
  currentOption = {},
  setValue = () => {},
  width = "300px",
  disabled = false,
  level = 2,
}) {
  return (
    <DropdownContainer>
      {label && <DropdownLabel disabled={disabled}>{label}</DropdownLabel>}
      <DropdownComponent
        level={level}
        width={width}
        value={currentOption.value || options[0].value}
        onChange={(e) => {
          setValue(options.find((option) => option.value === e.target.value));
        }}
        disabled={disabled}
      >
        {options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </DropdownComponent>
    </DropdownContainer>
  );
}
export default Dropdown;
