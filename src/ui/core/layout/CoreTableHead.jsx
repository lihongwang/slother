import TableHead from '@material-ui/core/TableHead';

import React from "react";

import PropTypes from "prop-types";

import { Component } from "../base";

class CoreTableHead extends Component {
  render() {
    const { children } = this.props;
    return <TableHead {...this.restOpts} className={this.prepareClasses()}>{children}</TableHead>;
  }
}

CoreTableHead.propTypes = {
  className: PropTypes.string,
};

export default CoreTableHead;
