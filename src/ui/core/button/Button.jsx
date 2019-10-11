import Button from "@material-ui/core/Button";

import React from "react";

import PropTypes from "prop-types";

import classnames from "classnames";

import Component from "../base/Component";

class CButton extends Component {
  renderContent() {
    const {
      label,
      classes,
      className,
      children,
    } = this.props;
    const len = React.Children.toArray(this.props.children).length;
    return (
      <Button {...this.restOpts} className={
        classnames(classes.buttonContainer, classes.button, className)
      }>{len ? children : this.translate(label)}</Button>
    );
  }
}

CButton.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

CButton.defaultProps = {
  color: "primary",
  size: "small",
};

export default CButton;
