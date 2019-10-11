import React from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import Component from "../base/Component";

/*
An imposing hero banner to showcase something
*/
class CorePage extends Component {
  renderHeader() {
    const { className, hasHeader = true } = this.props;
    const classes = classNames("hero-body", className);
    return hasHeader ? <div className={classes} />: null;
  }

  renderBody() {
    const { className, hasBody = true } = this.props;
    const classes = classNames("hero-head", className);
    return hasBody ? <div className={classes} /> : null;
  }

  renderFooter() {
    const { className, hasFooter = true } = this.props;
    const classes = classNames("hero-foot", className);
    return hasFooter ? <div className={classes} /> : null;
  }
  renderContent() {
    const {
      as: Section,
      primary,
      info,
      success,
      warning,
      danger,
      light,
      dark,
      bold,
      small,
      medium,
      large,
      fullheight,
      className,
      ...props
    } = this.props;
    const classes = classNames(
      "hero",
      {
        "is-primary": primary,
        "is-info": info,
        "is-success": success,
        "is-warning": warning,
        "is-danger": danger,
        "is-light": light,
        "is-dark": dark,
        "is-bold": bold,
        "is-small": small,
        "is-medium": medium,
        "is-large": large,
        "is-fullheight": fullheight
      },
      className
    );

    return (
      <Section className={classes} {...props}>
        {this.renderHeader}
        {this.renderHeader}
        {this.renderHeader}
      </Section>
    );
  }
}

CorePage.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  bold: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  fullheight: PropTypes.bool
};

CorePage.defaultProps = {
  as: "section"
};

export default CorePage;
