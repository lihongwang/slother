import { Wizard } from "../../core";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  MuiWizardRoot: {
    width: "100%"
  },
  typography: {
    useNextVariants: true,
  },
  stepsRoot: {
    justifyContent: "space-around",
    padding: 0
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  labelRoot: {
    flexDirection: "column",
    textAlign: "center"
  },
  label: {
    color: "#fff !important"
  },
  stepAfter: {
    "&:after": {
      content: "''",
      top: 0,
      right: "-16px",
      position: "absolute",
      borderTop: "33px solid transparent",
      borderBottom: "33px solid transparent",
      borderLeft: "16px solid #17246b"
    },
    "&:before": {
      content: "''",
      top: 0,
      left: "-16px",
      position: "absolute",
      borderTop: "32px solid #17246b",
      borderBottom: "33px solid #17246b",
      borderLeft: "16px solid transparent"
    },
    "&:first-child": {
      marginLeft: "0"
    },
    "&:last-child": {
      marginRight: "0"
    },
    "&:first-child:before": {
      content: "none"
    },
    "&:last-child:after": {
      content: "none"
    }
  },
  horizontal: {
    background: "#17246b",
    flex: 1,
    margin: "0 10px",
    padding: "10px 0",
    position: "relative"
  },
  connectorRoot: {
    display: "none"
  }
});
class MUIWizard extends Wizard {
  getDisplayName() {
    return "MuiWizard";
  }
}
export default withStyles(MUIWizard.combineStyles(styles))(MUIWizard);
