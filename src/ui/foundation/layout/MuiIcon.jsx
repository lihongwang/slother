import { withStyles } from "@material-ui/core/styles";

import { Icon } from "../../core";
const styles = theme => ({
});
class MuiIcon extends Icon {
  
}

export default withStyles(MuiIcon.combineStyles(styles))(MuiIcon);
