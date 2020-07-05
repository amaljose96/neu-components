import { updateColors }  from "../styles/colors";
import Button from "./components/Button";

function NeuComponents(parameters){
    updateColors(parameters);
    return {
        Button:Button,
    }
}

export default NeuComponents;