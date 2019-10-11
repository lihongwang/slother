import React from "react";

import PropTypes from "prop-types";

import classnames from "classnames";

import { Component, muiStyles, t } from "../core";

import BasePageModel from "./BasePageModel";
import baseStyles from "./baseStyles";
class BasePage extends Component {
  static prepareStyle(styles) {
    styles.unshift(baseStyles);
    styles.unshift(muiStyles);
  }
  constructor(props) {
    super(props);
    this.pageModel = new BasePageModel();
    this.state = { pageModel: this.pageModel, initShow: false };
  }
  translate(key) {
    return t(key);
  }
  onHomeClick() {
    window.location = "/";
  }
  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  prepareClasses() {
    const { classes, className } = this.props;
    return classes
      ? classnames(
          "MUIComponent",
          classes.pageRoot,
          this.constructor.name,
          className,
          this.mergeClasses()
        )
      : className;
  }
  renderHeader() {}
  renderMainContent() {
    if (!this.state.initShow) return <noscript />;
  }

  renderFooter() {}

  _renderFooter() {
    const { classes } = this.props;
    const footer = this.renderFooter();
    return footer ? React.cloneElement(footer, {className: classnames(classes._footer)}) : null;
  }

  renderContent() {
    const { classes, _cName_ } = this.props;
    return (
      <div className={classnames(classes._layout, "main-layout")}>
        {this.props.isHeaderHidden ? null : this.renderHeader()}
        <main className={classes._main}>
          <div className={classes._content}>
            {this[`render${_cName_}Content`]
              ? this[`render${_cName_}Content`]()
              : this.renderMainContent()}
          </div>
        </main>
        {this.props.isFooterHidden ? null : this._renderFooter()}
      </div>
    );
  }
}

BasePage.propTypes = {
  classes: PropTypes.object.isRequired,
  _cName_: PropTypes.string
};

export default BasePage;
