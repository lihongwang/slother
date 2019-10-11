import { withStyles } from "@material-ui/core/styles";
import {Snap} from "../../core";
const styles = theme => ({
  button: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center"
  },
  border: {
    border: "2px dashed rgba(0, 0, 0, 0.38)",
    padding: "10px 15px"
  },
  label: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "5px"
  },
  labelRightIcon: {
    paddingRight: "0.5em"
  },
  icon: {
    marginTop: 20
  },
  mediumIcon: {
    fontSize: 22
  },
  largeIcon: {
    fontSize: 24
  }
});

class MUISnap extends Snap {

}

export default withStyles(MUISnap.combineStyles(styles))(MUISnap);
