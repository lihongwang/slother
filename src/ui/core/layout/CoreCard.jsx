import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import React from "react";

import classnames from "classnames";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import Icon from "./CoreIcon";
import Component from "../base/Component";
import sanitizeRestProps from "../base/sanitizeRestProps";
class CoreCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentShown: true
    };
  }
  ajustRestOpts() {
    const { titleStyle, ...rest } = this.props;
    this.restOpts = sanitizeRestProps(rest);
  }
  renderHeaderAvatar() {
    const { classes } = this.props;
    return (
      <Avatar aria-label="Recipe" className={classes.avatar}>
        <Icon
          icon={faAngleUp}
          className={classes[this.state.contentShown ? "shown" : "hidden"]}
        />
        <Icon
          icon={faAngleDown}
          className={classes[this.state.contentShown ? "hidden" : "shown"]}
        />
      </Avatar>
    );
  }
  toggleContent() {
    this.setState({
      contentShown: !this.state.contentShown
    });
  }
  renderHeader() {
    const { title, classes } = this.props;
    return (
      <CardHeader
        className={classnames("card-header", classes.cardBg)}
        avatar={this.renderHeaderAvatar()}
        onClick={this.toggleContent.bind(this)}
        classes={{
          title: classes.title,
          content: classes.content
        }}
        title={title}
      />
    );
  }
  renderBlock() {
    const { children, classes, noPadding, noMargin } = this.props;
    let dynamicClasses = [];
    if (noPadding && classes) dynamicClasses.push(classes.noPadding);
    if (noMargin && classes) dynamicClasses.push(classes.noMargin);
    return (
      <CardContent
        className={classnames(
          dynamicClasses,
          classes[this.state.contentShown ? "shown" : "hidden"]
        )}
        classes={{ root: classes.contentRoot }}
      >
        {children}
      </CardContent>
    );
  }
  renderFooter() {
    return <CardActions />;
  }
  renderContent() {
    const {
      title,
      action,
      titleStyle,
      classes,
      noPadding,
      noMargin
    } = this.props;
    let dynamicClasses = [];
    if (noPadding && classes) dynamicClasses.push(classes.noPadding);
    if (noMargin && classes) dynamicClasses.push(classes.noMargin);
    if (titleStyle === "half") dynamicClasses.push(classes.halfTitleBg);
    return (
      <Card
        data-title={title}
        className={classnames(dynamicClasses, classes.column)}
        classes={{ root: classes.fullWidth }}
        {...this.restOpts}
      >
        {title && titleStyle !== "half" ? this.renderHeader() : null}
        {this.renderBlock()}
        {action ? this.renderFooter() : null}
      </Card>
    );
  }
}

CoreCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
};

CoreCard.defaultProps = {};
export default CoreCard;
