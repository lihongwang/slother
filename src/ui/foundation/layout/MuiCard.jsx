import { withStyles } from "@material-ui/core/styles";

import { Card } from "../../core";
const styles = theme => ({
  container: {},
  title: {
    fontSize: "16px"
  },
  content: {
    width: "50%"
  },
  cardBg: {
    padding: "10px"
  },
  avatar: {
    height: "24px",
    width: "24px",
    lineHeight: "24px",
    backgroundColor: "#FF851B",
  },
  halfTitle: {
    color: "red"
  },
  halfTitleBg: {
    "&:before": {
      background: "#efc6c3",
      content: "attr(data-title)",
      position: "absolute",
      width: "50%",
      height: "40px",
      lineHeight: "40px",
      display: "block",
      textAlign: "center",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#fff",
      borderRadius: 0,
      fontSize: "20px",
      fontWeight: "600",
      padding: "0 12px"
    }
  },
  contentRoot: {
    borderTop: "1px solid #d9d9d9",
    padding: "10px",
    "&:last-child": {
      paddingBottom: "10px"
    }
  }
});
class MuiCard extends Card {}

export default withStyles(MuiCard.combineStyles(styles))(MuiCard);
