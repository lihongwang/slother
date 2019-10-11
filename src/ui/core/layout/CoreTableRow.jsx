import TableRow from '@material-ui/core/TableRow';

import React from "react";

import PropTypes from "prop-types";

import { Component } from "../base";

class CoreTableRow extends Component {
  render() {
    const { children} = this.props;
    return <TableRow {...this.restOpts} className={this.prepareClasses()}>{children}</TableRow>;
  }
}

CoreTableRow.propTypes = {
  className: PropTypes.string,
};

export default CoreTableRow;
