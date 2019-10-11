import { withStyles } from "@material-ui/core/styles";

import { CardGroup } from "../../core";
const styles = theme => ({
  container: {
    padding: "5px"
  },
  card: {
    padding: "5px 0 !important"
  }
});
class MuiCardGroup extends CardGroup {
  
}

export default withStyles(MuiCardGroup.combineStyles(styles))(MuiCardGroup);
