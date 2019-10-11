import { withStyles } from "@material-ui/core/styles";
import { SingleRow } from "../../core";
const styles = theme => ({
  root: {width: "100%"},
});
class MUITabContent extends SingleRow {
  
}

export default withStyles(MUITabContent.combineStyles(styles))(MUITabContent);
