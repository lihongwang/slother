import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

import React from "react";

import PropTypes from "prop-types";

import classnames from "classnames";

import {Button, Responsive} from "../../core";

const styles = theme =>({
  button: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center"
  },
  border: {
    border: "2px dashed rgba(0, 0, 0, 0.38)",
    padding: "10px 15px"
  },
  label: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "5px"
  },
  labelRightIcon: {
    paddingRight: "0.5em"
  },
  icon: {
    marginTop: 20
  },
  mediumIcon: {
    fontSize: 22
  },
  largeIcon: {
    fontSize: 24
  }
});

class MUIAddButton extends Button {
  componentDidMount() {
    // Grab elements, create settings, etc.
    // Get access to the camera!
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //   // Not adding `{ audio: true }` since we only want video now
    //   navigator.mediaDevices
    //     .getUserMedia({ video: true })
    //     .then(function(stream) {
    //     var video = document.getElementById("video");
    // //video.src = window.URL.createObjectURL(stream);
    //       if (video) {
    //         video.srcObject = stream;
    //         video.play();
    //       }
    //     });
    // }
  }
  renderContent() {
    const {
      alignIcon,
      children,
      classes,
      className,
      color,
      disabled,
      label,
      isVideo,
      isUpload,
      size,
      ...rest
    } = this.props;
    return (
      <Responsive
        small={
          label && !disabled ? (
            <Tooltip title={this.translate(label)}>
              <IconButton
                aria-label={this.translate(label)}
                className={className}
                color={color}
                {...rest}
              >
                {children}
              </IconButton>
            </Tooltip>
          ) : (
            <IconButton
              className={className}
              color={color}
              disabled={disabled}
              {...rest}
            >
              {children}
            </IconButton>
          )
        }
        medium={
          <div
            className={classnames(classes.button, className)}
            color={color}
            size={size}
            aria-label={label ? this.translate(label) : undefined}
            disabled={disabled}
            {...rest}
            classes={{ label: classes.label }}
          >
            <span
              className={classnames({
                [classes.label]: alignIcon === "left",
                [classes.labelRightIcon]: alignIcon !== "left"
              })}
            >
              {this.translate(label)}
            </span>
            {isVideo ?
                <input type="file" accept="image/*" capture="camera"/>
            : null}
            {isUpload ?
                <input type="file" id="upload"  />
                : null}
            <FontAwesomeIcon
              icon={faPlus}
              className={classnames(classes.border, classes.icon)}
            />
          </div>
        }
      />
    );
  }
}

MUIAddButton.propTypes = {
  alignIcon: PropTypes.string,
  children: PropTypes.element,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  isVideo: PropTypes.bool,
  isUpload: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"])
};

MUIAddButton.defaultProps = {
  color: "primary",
  size: "small"
};

export default withStyles(styles)(MUIAddButton);
