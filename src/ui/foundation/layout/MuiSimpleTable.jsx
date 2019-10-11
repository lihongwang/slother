import { TableHead, TableRow, withStyles } from "@material-ui/core";

import React from "react";

import PropTypes from "prop-types";

import classnames from "classnames";

import { MTable } from "../../core";
const styles = theme => ({
  container: {
    maxWidth: "100%"
  },
  centerTitle: {
    textAlign: "center",
    background: "#d694a0",
    color: "red",
    padding: "10px",
    "font-size": "16px"
  },
  headerStyle: {
    backgroundColor: "#efc6c3",
    color: "#a22f26",
    border: "2px solid #d9d9d9",
    textAlign: "center",
  },
  headerRow: {
    height: "33px"
  },
  td: {
    textAlign: "center",
    border: "2px solid #d9d9d9",
    padding: "5px",
    "&:last-child": {
      textAlign: "right"
    }
  }
});
class MUISimpleTable extends MTable {
  prepareComponents() {
    const { title, classes } = this.props;
    return {
      Toolbar: props => (
        <div className={classnames(classes.centerTitle)}>{title}</div>
      ),
      Cell: props => (
        <td className={classnames(classes.td)}>
          {props.columnDef.format
            ? props.columnDef.format(props.value)
            : props.value}
        </td>
      ),
      Header: props => {
        let ths = [];
        props.columns.forEach((c, index) => {
          ths.push(
            <th key={`th-${index}`} className={classnames(classes.headerStyle)}>
              {c.title}
            </th>
          );
        });
        return (
          <TableHead>
            <TableRow classes={{ root: classnames(classes.headerRow) }}>
              {ths}
            </TableRow>
          </TableHead>
        );
      }
    };
  }
  prepareOptions() {
    return {
      search: false,
      paging: false,
      sorting: false,

      rowStyle: {},
      cellStyle: {
        border: "2px solid #d9d9d9"
      }
    };
  }
}

MUISimpleTable.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string
};
MUISimpleTable.defaultProps = {
  className: "container"
};

export default withStyles(MUISimpleTable.combineStyles(styles))(MUISimpleTable);
