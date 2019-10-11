import { withStyles } from "@material-ui/core/styles";
import { Row } from "../../core";
const styles = theme => ({
  MuiRowRoot: {width: "100%"}
});
class MUIRow extends Row {
  
}

export default withStyles(MUIRow.combineStyles(styles))(MUIRow);
