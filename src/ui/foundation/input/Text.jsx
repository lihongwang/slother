import { withStyles } from "@material-ui/core/styles";

import {Text} from "../../core";
const styles = theme => ({
    input: {
        padding: "10px"
    }
});
export class MUIText extends Text {
           
}

export default withStyles(MUIText.combineStyles(styles))(MUIText);
