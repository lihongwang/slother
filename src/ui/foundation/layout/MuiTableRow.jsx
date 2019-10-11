import { withStyles } from "@material-ui/core/styles";

import { TableRow } from "../../core";
const styles = theme => ({
  container: {
    maxWidth: "100%"
  }
});
class MuiTableRow extends TableRow {
  
}

export default withStyles(MuiTableRow.combineStyles(styles))(MuiTableRow);
