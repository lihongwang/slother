import { withStyles } from "@material-ui/core/styles";
import { Page } from "../../core";
const styles = theme => ({
  MuiPageRoot: {width: "100%"}
});
class MuiPage extends Page {
  
}

export default withStyles(MuiPage.combineStyles(styles))(MuiPage);
