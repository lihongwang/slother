import { withStyles } from "@material-ui/core/styles";

import { SingleRow } from "../../core";
const styles = theme => ({
  MuiSingleRowRoot: {width: "auto"},
  container: {margin: "10px"}
});
class MUISingleRow extends SingleRow {
  
}
export default withStyles(MUISingleRow.combineStyles(styles))(MUISingleRow);
