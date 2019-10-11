import Table from '@material-ui/core/Table';

import React from "react";

import PropTypes from "prop-types";

import { Component } from "../base";

class CoreTable extends Component {
  render() {
    const { children } = this.props;
    return <Table {...this.restOpts} className={this.prepareClasses()}>{children}</Table>;
  }
}

CoreTable.propTypes = {
  className: PropTypes.string,
};

export default CoreTable;
