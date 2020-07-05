import styled from "styled-components";
import { outsetElement, resetStyles } from "../../../styles/neumorphismStyles";
import colors from "../../../styles/colors";

export const ButtonContainer = styled.div`
  ${resetStyles()}
  ${(props) => outsetElement(props.level)};
  color: ${(props) =>
    props.disabled
      ? colors.darkShade
      : props.type === "primary"
      ? colors.primaryColor
      : colors.textColor};
  max-height: 40px;
  font-weight: 400;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  transition: all 0.2s;
  width: fit-content;
  :hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    ${(props) => outsetElement(props.level /1.5)};
  }
  :active {
    ${(props) =>
      !props.disabled &&
      `   
        ${outsetElement(props.level/2)};
        background-color:${colors.darkShade}11;`}
  }
`;
