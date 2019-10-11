import TableBody from "@material-ui/core/TableBody";

import React from "react";

import PropTypes from "prop-types";

import { Component } from "../base";

class CoreTableBody extends Component {
  render() {
    const { children } = this.props;
    return (
      <TableBody {...this.restOpts} className={this.prepareClasses()}>
        {children}
      </TableBody>
    );
  }
}

CoreTableBody.propTypes = {
  className: PropTypes.string
};

export default CoreTableBody;
