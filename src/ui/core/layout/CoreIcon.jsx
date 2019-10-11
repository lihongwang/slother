import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

import PropTypes from "prop-types";

import { Component } from "../base";

class CoreIcon extends Component {
  renderContent() {
    return (
      <FontAwesomeIcon {...this.restOpts}/>
    );
  }
}

CoreIcon.propTypes = {
  className: PropTypes.string,
};

export default CoreIcon;
