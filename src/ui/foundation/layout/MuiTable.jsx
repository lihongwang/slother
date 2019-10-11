import { withStyles } from "@material-ui/core/styles";

import { Table } from "../../core";
const styles = theme => ({
  container: {
    maxWidth: "100%"
  }
});
class MUITable extends Table {
  
}

export default withStyles(MUITable.combineStyles(styles))(MUITable);
