import { withStyles } from "@material-ui/core/styles";
import { Tab } from "../../core";
const styles = theme => ({
  container: {
    flex: "1 1 auto",
    display: "flex",
    "&:after": {
      content: "''",
      top: 0,
      right: "1px",
      position: "relative",
      borderTop: "24px solid transparent",
      borderBottom: "24px solid transparent",
      borderLeft: "18px solid #ccc"
    },
  },
  tabRoot: {
    flex: "1 1 auto",
    display: "flex",
    maxWidth: "100%",
    border: "1px solid #ccc",
    background: "#eee"
  }
});
class MUITab extends Tab {
  
}

export default withStyles(MUITab.combineStyles(styles))(MUITab);
