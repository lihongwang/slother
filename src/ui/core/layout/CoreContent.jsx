import React from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import Component from "../base/Component";

/*
A single class to handle WYSIWYG generated content, where only HTML tags are available
*/
class CoreContent extends Component {
  render() {
    const {
      small,
      medium,
      large,
      children,
      html,
      className,
      style,
      ...props
    } = this.props;
    const classes = classNames(
      "content",
      {
        "is-small": small,
        "is-medium": medium,
        "is-large": large
      },
      className
    );

    if (html)
      return (
        <div
          id={this.id}
          style={style}
          className={classes}
          dangerouslySetInnerHTML={{ __html: html }}
          {...props}
        />
      );

    return (
      <div id={this.id} style={style} className={classes} {...props}>
        {children}
      </div>
    );
  }
}

CoreContent.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node,
  html: PropTypes.string
};

export default CoreContent;
