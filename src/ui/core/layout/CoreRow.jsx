import PropTypes from "prop-types";

import { Component } from "../base";
class CoreRow extends Component {
  renderContent() {
    const { children } = this.props;
    return children;
  }
}

CoreRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.element,
    PropTypes.object
  ])
};

export default CoreRow;
