import Typography from "@material-ui/core/Typography";

import React from "react";

import PropTypes from "prop-types";

import { Component } from "../base";

class CoreTypography extends Component {
  render() {
    const { children } = this.props;
    const component = this.props.component || "div";
    return <Typography component={component} className={this.prepareClasses()} {...this.restOpts}>{children}</Typography>;
  }
}

CoreTypography.propTypes = {
  className: PropTypes.string,
};

export default CoreTypography;
