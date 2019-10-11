import { withStyles } from "@material-ui/core/styles";

import {Button} from "../../core";
const styles = theme => ({
  root: {
    
  },
  buttonContainer: {
    display: "inline-flex",
    alignItems: "center"
  },
  button: {

  },
  label: {
    paddingLeft: "0.5em"
  },
  labelRightIcon: {
    paddingRight: "0.5em"
  },
  smallIcon: {
    fontSize: 20
  },
  mediumIcon: {
    fontSize: 22
  },
  largeIcon: {
    fontSize: 24
  }
});

class MUIButton extends Button {
  
}

export default withStyles(MUIButton.combineStyles(styles))(MUIButton);
