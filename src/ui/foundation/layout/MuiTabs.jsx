import Tabs from "@material-ui/core/Tabs";
import { withStyles } from "@material-ui/core/styles";

import React, { Children, isValidElement } from "react";

import PropTypes from "prop-types";

import { Component } from "../../core";

import Tab from "./MuiTab";
import TabContent from "./MuiTabContent";
const styles = theme => ({
  tabContainer: {
    padding: "10px"
  },
  indicator: {
    backgroundColor: "white"
  }
});
class MUITabs extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value || 0 };
  }
  handleChange(event, value) {
    this.setState({
      value: value
    });
  }
  renderContent() {
    const value = this.state.value;
    const { desc, classes, children, onChange, ...rest } = this.props;
    let tabs = [],
      tabContents = [];
    Children.map(children, (tab, index) => {
      if (!tab || !isValidElement(tab)) return null;
      tabs.push(
        <Tab
          key={`tab${index}`}
          component="a"
          value={index}
          onClick={event => event.preventDefault()}
          {...tab.props.tabProps}
        />
      );
      if (value === index)
        tabContents.push(
          <TabContent key={`tab-content${index}`}>{tab}</TabContent>
        );
    });
    return (
      <div>
        {desc ? <div>{desc}</div> : null}
        <div className={classes.tabContainer }>
          <Tabs classes={{ indicator: classes.indicator }} centered indicator={null} value={value} onChange={this.handleChange.bind(this)} {...rest}>
            {tabs}
          </Tabs>
        </div>

        <div>{tabContents}</div>
      </div>
    );
  }
}

MUITabs.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number
};
MUITabs.defaultProps = {
  value: 0
};
export default withStyles(MUITabs.combineStyles(styles))(MUITabs);

