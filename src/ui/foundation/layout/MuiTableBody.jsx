import { withStyles } from "@material-ui/core/styles";

import { TableBody } from "../../core";
const styles = theme => ({
  container: {
    maxWidth: "100%"
  }
});
class MuiTableBody extends TableBody {
  
}

export default withStyles(MuiTableBody.combineStyles(styles))(MuiTableBody);
