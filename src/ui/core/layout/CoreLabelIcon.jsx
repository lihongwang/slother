import React from "react";

import PropTypes from "prop-types";
import classnames from "classnames";

import { Component } from "../base";

import Icon from "./CoreIcon";
import SingleRow from "./CoreSingleRow";
import Typography from "./CoreTypography";

class CoreLabelIcon extends Component {
  render() {
    const {
      icon,
      iconClass,
      label,
      classes,
      iconColor,
      gap,
      ...rest
    } = this.props;
    return (
      <SingleRow {...rest} className={this.prepareClasses()}>
        <Typography>{label}</Typography>
        {iconClass ? (
          <Typography
            className={classnames(
              classes[gap],
              classes[iconColor],
              classes[iconClass]
            )}
          />
        ) : (
          <Icon
            icon={icon}
            className={classnames(classes[gap], classes[iconColor])}
          />
        )}
      </SingleRow>
    );
  }
}

CoreLabelIcon.propTypes = {
  className: PropTypes.string
};

export default CoreLabelIcon;
