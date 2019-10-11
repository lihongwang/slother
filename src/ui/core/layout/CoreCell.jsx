import Grid from "@material-ui/core/Grid";

import React from "react";

import classnames from "classnames";

import PropTypes from "prop-types";

import map from "lodash/map";

import Component from "../base/Component";
class CoreCell extends Component {
  renderContent() {
    const { classes, gridClassName, gbox, children } = this.props;
    let addChild = (child, index) => {
      if (child.props) {
        const {
          className,
          gxs, // row size
          gsm, // row small size
          full,
          gd, // flex direction
          gcolor, // background color
          gf // flex 1?
        } = child.props;
        let extraClass = [],
          extraSubClass = [];
        if(full) {
          extraSubClass.push(classes.fullWidth);
        }
        extraClass.push(classes.isFlex);
        return (
          <Grid
            key={`grid-${index}`}
            item
            xs={gxs}
            sm={gsm}
            className={classnames(
              `grid-${index + 1}`,
              classes.grid,
              classes[gd],
              classes[gf],
              gbox,
              gcolor,
              extraClass
            )}
          >
            {React.cloneElement(child, {
              className: classnames(className, extraSubClass)
            })}
          </Grid>
        );
      } else {
        return child;
      }
    };
    return (
      <Grid
        container
        className={classnames(
          "cell-container",
          classes.container,
          gridClassName
        )}
        children={children}
        {...this.restOpts}
      >
        {React.Children.count(children) === 1
          ? addChild(children, 0)
          : map(children, addChild)}
      </Grid>
    );
  }
}

CoreCell.propTypes = {
  classes: PropTypes.object.isRequired,
  direction: PropTypes.string,
  spacing: PropTypes.number
};

CoreCell.defaultProps = {
  spacing: 0
};
export default CoreCell;
