import { withStyles } from "@material-ui/core/styles";
import {Text} from "../../core";
const styles = theme => ({
    input: {
        padding: "10px"
    }
});
export class MuiBoxText extends Text {
           
}

export default withStyles(MuiBoxText.combineStyles(styles))(MuiBoxText);
