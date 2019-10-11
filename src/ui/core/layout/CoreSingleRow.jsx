
import React from "react";

import classnames from "classnames";

import PropTypes from "prop-types";

import { Component } from "../base";

class CSingleRow extends Component {
  render() {
    const { children, gd, classes, style } = this.props;
    return <div id={this.id} style={style} className={classnames(classes[`${this.constructor.name}Root`],classes[gd], classes.flex)}>{children}</div>;
  }
}

CSingleRow.propTypes = {
  className: PropTypes.string,
};

export default CSingleRow;
