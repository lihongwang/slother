import { withStyles } from "@material-ui/core/styles";

import { TableCell } from "../../core";
const styles = theme => ({
  _root: {
    width: "auto",
    padding: "5px",
    "&:last-child": {
      paddingRight: 0
    }
  }
});
class MuiTableCell extends TableCell {
  
}

export default withStyles(MuiTableCell.combineStyles(styles))(MuiTableCell);
