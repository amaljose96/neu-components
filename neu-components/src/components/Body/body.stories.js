import React from "react";
import Body from "./index.js";
import { withKnobs} from "@storybook/addon-knobs";
export default { title: "Body", decorators: [withKnobs] };
export const appBody = () => {
  return <Body>Body Content</Body>;
};