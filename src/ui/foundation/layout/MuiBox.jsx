import { withStyles } from "@material-ui/core/styles";
import { Box } from "../../core";
const styles = theme => ({
  MuiBoxRoot: {width: "100%"}
});
class MuiBox extends Box {
  
}

export default withStyles(MuiBox.combineStyles(styles))(MuiBox);
