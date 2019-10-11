import { withStyles } from "@material-ui/core/styles";

import { TableHead } from "../../core";
const styles = theme => ({
  container: {
    maxWidth: "100%"
  }
});
class MuiTableHead extends TableHead {
  
}

export default withStyles(MuiTableHead.combineStyles(styles))(MuiTableHead);
