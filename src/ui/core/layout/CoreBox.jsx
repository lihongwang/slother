import React from "react";
import PropTypes from "prop-types";
import Component from "../base/Component";

/*
A white box to contain other elements
*/
class CoreBox extends Component {
  render() {
    return (
      <div
        id={this.id}
        style={this.prepareExtStyle()}
        className={this.prepareClasses()}
      />
    );
  }
}
CoreBox.propTypes = {
  className: PropTypes.string
};

export default CoreBox;
