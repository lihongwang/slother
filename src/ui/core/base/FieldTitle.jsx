import React from "react";
import Component from "./Component";

class FieldTitle extends Component {
  renderContent() {
    const { label, isRequired } = this.props;
    return (
      <div>
        <span>{this.translate(label)}</span>
        <span>{isRequired && " *"}</span>
      </div>
    );
  }
}

export default FieldTitle;
