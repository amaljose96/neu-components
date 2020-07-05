import React from "react";
import Button from "./index.js";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Body from "../Body/index.js";
export default { title: "Button", decorators: [withKnobs] };
export const normalButton = () => {
  const message = text("Text", "Submit");
  const isDisabled = boolean("Is Disabled?", false);
  const level = number("Level", 4);
  return (
    <Body>
      <Button text={message} disabled={isDisabled} level={level}></Button>
    </Body>
  );
};
export const primaryButton = () => {
  const message = text("Text", "Primary Button");
  const isDisabled = boolean("Is Disabled?", false);
  const level = number("Level", 4);
  return (
    <Body>
      <Button
        type="primary"
        disabled={isDisabled}
        text={message}
        level={level}
      ></Button>
    </Body>
  );
};
