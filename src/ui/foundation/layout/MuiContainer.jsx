import { withStyles } from "@material-ui/core/styles";
import { Container } from "../../core";
const styles = theme => ({
  MuiContainerRoot: {width: "100%"}
});
class MuiContainer extends Container {
  
}

export default withStyles(MuiContainer.combineStyles(styles))(MuiContainer);
