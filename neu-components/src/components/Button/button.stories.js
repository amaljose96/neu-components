import React from "react";
import Button from "./index.js";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
export default { title: "Button", decorators: [withKnobs] };
export const normalButton = () => {
  const message = text("Text", "Submit");
  const isDisabled = boolean("Is Disabled?", false);
  return <Button text={message} disabled={isDisabled}></Button>;
};
export const primaryButton = () => {
  const message = text("Text", "Primary Button");
  const isDisabled = boolean("Is Disabled?", false);
  return <Button type="primary" disabled={isDisabled} text={message}></Button>;
};
