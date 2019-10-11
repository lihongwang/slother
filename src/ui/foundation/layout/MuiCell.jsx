import { withStyles } from "@material-ui/core/styles";

import { Cell } from "../../core";
const styles = theme => ({
  MuiCellRoot: {
    width: "100%",
  },
  container: {
    width: "100%",
  },
  grid: {
    display: "flex",
    margin: "0 auto"
  }
});

class MuiCell extends Cell {
  getDisplayName() {
    return "MuiCell";
  }
}

export default withStyles(MuiCell.combineStyles(styles))(MuiCell);
