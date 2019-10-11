import React from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import Component from "../base/Component";

/*
A simple container to center your content horizontally
*/
class CoreContainer extends Component {
  renderContent() {
    const {
      fluid,
      hasTextCentered,
      style,
      className,
      children,
      classes,
      flextype
    } = this.props;
    return (
      <div
        id={this.id}
        style={style}
        className={this.prepareClasses([
          "container",
          {
            "is-fluid": fluid,
            "has-text-centered": hasTextCentered
          },
          classes[flextype || "row"],
          className
        ])}
        {...this.restOpts}
      >
        {children}
      </div>
    );
  }
}

CoreContainer.propTypes = {
  fluid: PropTypes.bool,
  hasTextCentered: PropTypes.bool,
  className: PropTypes.string
};

export default CoreContainer;
