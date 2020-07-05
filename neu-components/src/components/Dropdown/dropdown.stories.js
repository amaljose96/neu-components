import React from "react";
import Button from "./index.js";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
} from "@storybook/addon-knobs";
import Dropdown from "./index.js";
import Body from "../Body/index.js";
export default { title: "Dropdown", decorators: [withKnobs] };

export const normalDropdown = () => {
  const isDisabled = boolean("Is Disabled?", false);
  const level = number("Level", 4);
  const dropdownLabel = text("Label", "Dropdown");
  const optionList = array("Options", ["Option 1"]);
  return (
    <Body>
    <Dropdown
      options={optionList.map((v) => ({
        value: v,
        label: v,
      }))}
      disabled={isDisabled}
      level={level}
      label={dropdownLabel}
    /></Body>
  );
};
