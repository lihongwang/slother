import Tab from "@material-ui/core/Tab";
import React from "react";

import PropTypes from "prop-types";

import { Component } from "../base";

class CTab extends Component {
  renderContent() {
    const { label, classes, ...rest} = this.props;
    return (
      <Tab
        component="a"
        label={this.translate(label)}
        classes={{
            root: classes.tabRoot
        }}
        {...rest}
      />
    );
  }
}

CTab.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string.isRequired
};
CTab.defaultProps = {
  className: "container"
};

export default CTab;

// const StyledTab = withStyles(theme => ({
//   root: {
//     textTransform: "initial",
//     color: "#9e88a2",
//     fontWeight: theme.typography.fontWeightLight,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing.unit * 1,
//     "&:hover": {
//       color: "#fff"
//     },
//     "&$selected": {
//       color: "#fff"
//     },
//     "&:focus": {
//       color: "#fff"
//     }
//   },
//   selected: {}
// }))(props => <Tab disableRipple {...props} />);
// export default StyledTab;