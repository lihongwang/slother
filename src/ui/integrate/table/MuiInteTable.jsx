import { withStyles } from "@material-ui/core/styles";

import React from "react";

import PropTypes from "prop-types";

import MaterialTable from "material-table";

import Component from "../base/Component";
const styles = theme => ({});
class MuiInteTable extends Component {
  // columns={[
  //     { title: "Adı", field: "name" },
  //     { title: "Soyadı", field: "surname" },
  //     { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
  //     {
  //         title: "Doğum Yeri",
  //         field: "birthCity",
  //         lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
  //     }
  // ]}
  // data={[
  //     { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 }
  // ]}
  // title="Demo Title"
  render() {
    const { columns, data, title } = this.props;
    return (
      <div id={this.id}>
        <MaterialTable columns={columns} data={data} title={title} />
      </div>
    );
  }
}

MuiInteTable.propTypes = {
  className: PropTypes.string
};

export default withStyles(MuiInteTable.combineStyles(styles))(MuiInteTable);
