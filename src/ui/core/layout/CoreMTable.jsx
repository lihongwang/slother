import React from "react";

import PropTypes from "prop-types";

import MaterialTable from "material-table";

import { Component } from "../base";
class CTable extends Component {
  prepareComponents() {
    return {};
  }
  prepareOptions() {
    return {};
  }
  prepareStyles() {
    return {};
  }
  prepareClasses() {
    return {};
  }
  renderContent() {
    const {
      columns,
      data,
      title,
      classes,
      components,
      options,
      ...rest
    } = this.props;
    return (
      <MaterialTable
        columns={columns}
        data={data}
        classes={this.prepareClasses()}
        title={this.translate(title)}
        components={this.prepareComponents()}
        options={this.prepareOptions()}
        {...rest}
      />
    );
  }
}

CTable.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string
};
CTable.defaultProps = {
  className: "container"
};

export default CTable;
