import { rgbToHex, hslToRgb, getLighterShade, getDarkerShade } from "./helpers";

var colors = {
  backgroundColor: "#ead9f2",
  borderRadius: 20,
  darkShade: "#d7b7e6",
  lightShade: "#ffffff",
  primaryColor: "#aa00ff",
  textColor: "#3a1f47",
};

export function updateColors(parameters = {}) {
  let hue = parameters.hue || 280;
  let backgroundColor = rgbToHex(...hslToRgb(hue / 360, 0.5, 0.9));
  if (parameters.backgroundColor) {
    let rgb = hexToRgb(parameters.backgroundColor);
    let hsl = rgbToHsl(...rgb);
    hue = hsl[0] * 360;
    backgroundColor = parameters.backgroundColor;
  }
  let textColor =
    parameters.textColor || rgbToHex(...hslToRgb(hue / 360, 0.4, 0.2));
  let primaryColor =
    parameters.primaryColor || rgbToHex(...hslToRgb(hue / 360, 1, 0.5));
  let shadeContrast = parameters.contrast || 0.1;
  let borderRadius = parameters.borderRadius || 20;
  colors = {
    textColor,
    primaryColor,
    backgroundColor,
    lightShade: getLighterShade(backgroundColor, shadeContrast),
    darkShade: getDarkerShade(backgroundColor, shadeContrast),
    borderRadius,
  };
}
export default colors;
