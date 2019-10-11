import { withStyles } from "@material-ui/core/styles";

import { MTable } from "../../core";
const styles = theme => ({
  container: {
    maxWidth: "100%"
  }
});
class MuiMTable extends MTable {
  
}

export default withStyles(MuiMTable.combineStyles(styles))(MuiMTable);
