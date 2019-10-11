import Grid from "@material-ui/core/Grid";
import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import map from "lodash/map";
import Component from "../base/Component";
import sanitizeRestProps from "../base/sanitizeRestProps";
class CoreCardGroup extends Component {
  ajustRestOpts() {
    const { titleStyle, xs, sm, ...rest } = this.props;
    this.restOpts = sanitizeRestProps(rest);
  }
  renderContent() {
    const { classes, className, gap, children, xs, sm } = this.props;
    const len = children.length;
    let addChild = (child, index) => {
      return (
        <Grid
          key={`card-${index}`}
          item
          xs={xs}
          sm={sm}
          className={classnames(`card-${index + 1}`, classes.card)}
          style={{ marginBottom: index === len ? 0 : `${gap}px` }}
        >
          {child}
        </Grid>
      );
    };
    return (
      <Grid
        container
        className={classnames("card-container", classes.container, className)}
        style={{ marginTop: `${gap}px` }}
        {...this.restOpts}
      >
        {React.Children.count(children) === 1
          ? addChild(children, 0)
          : map(children, addChild)}
      </Grid>
    );
  }
}

CoreCardGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  gap: PropTypes.number,
  xs: PropTypes.number,
  space: PropTypes.number,
  sm: PropTypes.number
};

CoreCardGroup.defaultProps = {
  spacing: 0,
  gap: 0,
  xs: 12,
  sm: 12
};
export default CoreCardGroup;
