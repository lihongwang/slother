import { createMuiTheme } from "@material-ui/core/styles";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import keys from "lodash/keys";
import uniqueId from "lodash/uniqueId";
import defaultTheme from "./defaultTheme";
import sanitizeRestProps from "./sanitizeRestProps";

class BaseComponent extends Component {
  static combinedStyles;
  static prepareStyle(styles) {
    return styles;
  }
  static combineStyles(...styles) {
    //
    // ─── styles ────────────────────────────────────────────────────────────
    // {own:{},ext:{},base:{}}
    //


    this.combinedStyles = styles;

    return theme => {
      this.prepareStyle(styles);
      const outStyles = styles.map(arg => {
        // Apply the "theme" object for style functions.
        if (typeof arg === "function") {
          return arg(theme);
        }
        // Objects need no change.
        return arg;
      });
      return outStyles.reduce((acc, val) => Object.assign(acc, val));
    };
  }
  constructor(props) {
    super(props);
    this.id = props.id || uniqueId("melonUi-");
    this.theme = createMuiTheme(props.theme || defaultTheme);
    this.ajustRestOpts();
  }
  getDisplayName() {
    return null;
  }
  ajustRestOpts() {
    const { ...rest } = this.props;
    this.restOpts = sanitizeRestProps(rest);
  }

  translate(key) {
    return key;
  }

  renderContent() {
    // render content for component;
    return null;
  }

  filterProps() {
    return keys(this.props).filter(k => {
      return k.match(
        /(((margin|padding)((T|R|B|L|V|H|C)|w|h|width|height)(\d+)|\d+)|(_c|_ct|_cb|_t)(\w+)|row|column|(g(r|c)(\w+)))/
      );
    });
  }

  mergeClasses() {
    const {
        noPadding,
        noMargin,
        clr,
        fullWidth,
        fullHeight,
        classes
      } = this.props,
      dynamicClasses = [];

    this.filterProps().forEach(_k => {
      if (classes) dynamicClasses.push(classes[_k]);
    });
    const displayName = this.getDisplayName();
    if (displayName) dynamicClasses.push(classes[`${displayName}Root`]);
    if (clr && classes) dynamicClasses.push(classes[clr]);
    if (noPadding && classes) dynamicClasses.push(classes.noPadding);
    if (noMargin && classes) dynamicClasses.push(classes.noMargin);
    if (fullWidth && classes) dynamicClasses.push(classes.fullWidth);
    if (fullHeight && classes) dynamicClasses.push(classes.fullHeight);
    return dynamicClasses;
  }

  prepareClasses(names) {
    const { classes, className } = this.props;
    return classes
      ? classnames(
          "BaseComponent",
          this.constructor.name,
          className,
          this.mergeClasses(),
          names
        )
      : className;
  }
  prepareExtStyle() {
    const { style = {} } = this.props;
    return style;
  }
  render() {
    return (
      <div
        id={this.id}
        style={this.prepareExtStyle()}
        className={this.prepareClasses()}
      >
        {this.renderContent()}
      </div>
    );
  }
}
BaseComponent.propTypes = {
  classes: PropTypes.object,
  style: PropTypes.object, // add style for component's root dom
  className: PropTypes.string, // add style classes for component's root dom
  theme: PropTypes.object,
  noPadding: PropTypes.bool,
  noMargin: PropTypes.bool
};

BaseComponent.defaultProps = {
  theme: defaultTheme
};

export default BaseComponent;
