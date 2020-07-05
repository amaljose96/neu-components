import colors from "./colors";
export function resetStyles(){
    return `appearance:none;
    -webkit-appearance: none;
    border:none;
    outline:none;`;
}
export function outsetElement(level = 2) {
  return `       
    border-radius: ${colors.borderRadius}px;
    box-shadow: ${level / 2}px ${level / 2}px ${level}px ${colors.darkShade}E6, 
    -${level / 2}px -${level / 2}px ${level}px ${colors.lightShade}E6, 
    ${level / 2}px -${level / 2}px ${level}px ${colors.darkShade}33, 
    -${level / 2}px ${level / 2}px ${level}px ${colors.darkShade}33, 
    inset -${level / 2}px -${level / 2}px ${level}px ${colors.darkShade}88, 
    inset ${level / 2}px ${level / 2}px ${level}px ${colors.lightShade}4D;
    background: linear-gradient(to bottom right, ${colors.lightShade}aa, ${
    colors.darkShade
  }aa);`;
}
