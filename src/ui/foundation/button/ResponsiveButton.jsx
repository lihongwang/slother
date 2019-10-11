import MuiButton from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

import React from "react";

import PropTypes from "prop-types";

import classnames from "classnames";

import Component from "../base/Component";
import Responsive from "../layout/Responsive";
import {t, i18n } from "../i18n";
const styles = theme => ({
  buttonContainer: {
    display: "inline-flex",
    alignItems: "center"
  },
  button: {

  },
  label: {
    paddingLeft: "0.5em"
  },
  labelRightIcon: {
    paddingRight: "0.5em"
  },
  smallIcon: {
    fontSize: 20
  },
  mediumIcon: {
    fontSize: 22
  },
  largeIcon: {
    fontSize: 24
  }
});

class Button extends Component {
  renderContent() {
    const {
      alignIcon,
      children,
      classes,
      className,
      color,
      disabled,
      label,
      size,
      ...rest
    } = this.props;
    const _children = children ? children : [<span>{t(label)}</span>];
    return (
      <Responsive
        className={classnames(classes.border)}
        small={
          label && !disabled ? (
            <Tooltip title={t(label)}>
              <IconButton
                aria-label={t(label)}
                className={className}
                color={color}
                {...rest}
              >
                {_children}
              </IconButton>
            </Tooltip>
          ) : (
            <IconButton
              className={className}
              color={color}
              disabled={disabled}
              {...rest}
            >
              {_children}
            </IconButton>
          )
        }
        medium={
          <MuiButton
            className={classnames(classes.buttonContainer, className)}
            color={color}
            size={size}
            classes={{root: classes.button}}
            aria-label={label ? t(label) : undefined}
            disabled={disabled}
            {...rest}
          >
            {alignIcon === "left" &&
            _children &&
              React.cloneElement(_children, {
                className: classes[`${size}Icon`]
              })}
            {label && (
              <span
                className={classnames({
                  [classes.label]: alignIcon === "left",
                  [classes.labelRightIcon]: alignIcon !== "left"
                })}
              >
                {t(label)}
              </span>
            )}
            {alignIcon === "right" &&
            _children &&
              React.cloneElement(_children, {
                className: classes[`${size}Icon`]
              })}
          </MuiButton>
        }
      />
    );
  }
}

Button.propTypes = {
  alignIcon: PropTypes.string,
  children: PropTypes.element,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"])
};

Button.defaultProps = {
  color: "primary",
  size: "small"
};

export default withStyles(styles)(Button);
