import TableCell from '@material-ui/core/TableCell';

import React from "react";

import PropTypes from "prop-types";

import { Component } from "../base";

class CoreTableCell extends Component {
  render() {
    const { children, classes } = this.props;
    return <TableCell {...this.restOpts} style={this.prepareExtStyle()} classes={{root: classes._root}}className={this.prepareClasses()}>{children}</TableCell>;
  }
}

CoreTableCell.propTypes = {
  className: PropTypes.string,
};

export default CoreTableCell;
