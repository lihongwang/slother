import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

import PropTypes from "prop-types";

import classnames from "classnames";

import {Component} from "../base";

class Snap extends Component {
  componentDidMount() {
    // // Grab elements, create settings, etc.
    // // Get access to the camera!
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //   // Not adding `{ audio: true }` since we only want video now
    //   navigator.mediaDevices
    //     .getUserMedia({ video: true })
    //     .then(function(stream) {
    //       var video = document.getElementById("video");
    //       //video.src = window.URL.createObjectURL(stream);
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
      <div
        className={classnames(classes.Snap, className)}
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
        {isVideo ? (
          <input type="file" accept="image/*" capture="camera" />
        ) : null}
        {isUpload ? <input type="file" id="upload" /> : null}
        <FontAwesomeIcon
          icon={faPlus}
          className={classnames(classes.border, classes.icon)}
        />
      </div>
    );
  }
}

Snap.propTypes = {
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

Snap.defaultProps = {
  color: "primary",
  size: "small"
};

export default Snap;
