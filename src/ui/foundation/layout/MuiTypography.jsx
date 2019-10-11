import { withStyles } from "@material-ui/core/styles";
import { Typography } from "../../core";
const styles = theme => ({
  container: {margin: "10px"}
});
class MUITypography extends Typography {
  
}
export default withStyles(MUITypography.combineStyles(styles))(MUITypography);
