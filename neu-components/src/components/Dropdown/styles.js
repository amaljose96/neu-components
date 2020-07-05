import styled from "styled-components";
import colors from "../../../styles/colors";
import { outsetElement } from "../../../styles/neumorphismStyles";

export const DropdownContainer = styled.div``;

export const DropdownLabel = styled.div`
  font-size: 12px;
  color: ${(props) => (props.disabled? colors.darkShade:props.error ? colors.error : colors.textColor)};
  margin-bottom: 12px;
`;
export const DropdownComponent = styled.select`
  -webkit-appearance: none;
  ${props=>outsetElement(props.level)}
  padding:10px 20px;
  width: ${(props) => props.width};
  border: none;
  outline: none;
  font-size: 15px;
  color: ${props=>props.disabled?colors.darkShade:colors.textColor};
  transition: all 0.2s;
  :hover {
    cursor: ${props=>props.disabled?"not-allowed":"pointer"};
    ${props=>outsetElement(props.level/1.5)};
  }
  :focus {
    ${props=>outsetElement(props.level/2)};
  }
`;