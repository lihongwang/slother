import { withStyles } from "@material-ui/core";

import React from "react";

import PropTypes from "prop-types";

import classnames from "classnames";

import { Component } from "../../core";

import Container from "./MuiContainer";
import SingleRow from "./MuiSingleRow";
const styles = theme => ({
  mulHTitle: {
    textAlign: "center",
    fontWeight: "bold",
    width: "20px",
    padding: "10px",
    "font-size": "16px"
  },
  autoItem: {
    "flex-basis": 0,
    "flex-grow": 1,
  },
  item: {
    color: "#333",
    fontWeight: "bold",
    border: "1px solid #d9d9d9",
    "flex-basis": 0,
    "flex-grow": 1,
    textAlign: "center"
  },
  headerRow: {
    height: "33px"
  },
  td: {
    textAlign: "center",
    border: "2px solid #d9d9d9",
    padding: "5px"
  }
});
class MuiMulHeaderTable extends Component {
  renderTitleTable() {
    const { columns, classes } = this.props;
    let ths = [];
    columns.forEach((c, index) => {
      if (c.subs) {
        let sths = [];
        c.subs.forEach((s, i) => {
          sths.push(
            <SingleRow
              key={`item-${index}-${i}`}
              paddingV5
              className={classnames(classes.item)}
            >
              {s.title}
            </SingleRow>
          );
        });
        ths.push(
          <SingleRow
            row
            _cbLightBlue100
            key={`item-${index}`}
            className={classnames(classes.item)}
          >
            <SingleRow className={classes.autoItem}>{c.title}</SingleRow>
            <SingleRow className={classes.autoItem}>{sths}</SingleRow>
          </SingleRow>
        );
      } else {
        ths.push(
          <SingleRow _cbLightBlue100 paddingV5 key={`item-${index}`} className={classnames(classes.item)}>
            {c.title}
          </SingleRow>
        );
      }
    });
    return ths;
  }
  renderContentTable() {
    const { data, classes } = this.props;
    const cs = [];
    data.forEach((d, i) => {
      cs.push(
        <SingleRow key={`item-${i}`} paddingV5 _cbGreen100 className={classnames(classes.item)}>
          {d}
        </SingleRow>
      );
    });
    return cs;
  }
  renderContent() {
    const { title, classes } = this.props;
    return (
      <Container>
        <SingleRow className={classes.mulHTitle} _cBlue>
          {title}
        </SingleRow>
        <SingleRow className={classes.autoItem}>{this.renderTitleTable()}</SingleRow>
        <SingleRow className={classes.autoItem}>{this.renderContentTable()}</SingleRow>
      </Container>
    );
  }
}

MuiMulHeaderTable.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string
};
MuiMulHeaderTable.defaultProps = {
  className: "container"
};

export default withStyles(MuiMulHeaderTable.combineStyles(styles))(
  MuiMulHeaderTable
);
