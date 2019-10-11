import { withStyles } from "@material-ui/core/styles";

import React from "react";

import PropTypes from "prop-types";

import Formsy from "formsy-react";

import Component from "../base/Component";
const styles = theme => ({});
class MuiInteForm extends Component {
  getInitialState() {
    return {
      canSubmit: false
    };
  }
  enableButton() {
    this.setState({
      canSubmit: true
    });
  }
  disableButton() {
    this.setState({
      canSubmit: false
    });
  }
  submit(model) {}
  render() {
    const { children } = this.props;
    return (
      <Formsy.Form
        id={this.id}
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        {children}
        <button type="submit" disabled={!this.state.canSubmit}>
          Submit
        </button>
      </Formsy.Form>
    );
  }
}

MuiInteForm.propTypes = {
  className: PropTypes.string
};

export default withStyles(MuiInteForm.combineStyles(styles))(MuiInteForm);
