import {faHome, faTty} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";

import React from "react";

import PropTypes from "prop-types";

import { Button } from "../button";
import { Component } from "../../core";

import Cell from "./MuiCell";
import Container from "./MuiContainer";
import Row from "./MuiRow";
import SingleRow from "./MuiSingleRow";
const styles = theme => ({
  paddingH10: {
    padding: "0 10px"
  },
  padding10: {
    padding: "10px"
  },
  marginL20: {
    marginLeft: "20px"
  },
  marginL5: {
    marginLeft: "5px"
  },
  button: {
    color: "#fff",
    background: "#001f3f",
    justifyContent: "center",
    padding: "0 10px"
  },
  cell: {
    background: "#ccc",
    height: "40px",
    display: "flex"
  }
});

class ComAppBar extends Component {
  renderContent() {
    const { classes, isLogin, isMain, subTitle } = this.props;
    return (
      <Container flextype="column" _cBlue>
        <Toolbar className={classes.height60}>
          <Cell fullWidth>
            <Row gxs={6} gsm={6} gd="grstart">
              <FontAwesomeIcon
                icon={faHome}
                onClick={this.props.homeIconClick}
              />
              <span className={classes.marginL5}>{this.props.agentName}</span>
            </Row>
            <Row gxs={6} gsm={6} gd="grend">
              <FontAwesomeIcon icon={faTty} />
              <span className={classes.marginL5}>{this.props.agentTel}</span>
            </Row>
          </Cell>
        </Toolbar>
        {isLogin ? (
          <Cell
            className={classes.cell}
            space={8}
            classes={{ container: classes.padding10 }}
          >
            <SingleRow gxs={3} gsm={3} gd="grstart">
              {subTitle}
            </SingleRow>
            <Row gxs={9} gsm={9} gd="grend">
              {isMain ? (
                <SingleRow />
              ) : (
                <Button
                  classes={{ button: classes.button }}
                  label="主页菜单"
                  onClick={() => {
                    window.location.href = "/crm/#/GA002";
                  }}
                />
              )}
              <Button
                classes={{ root: classes.marginL20, button: classes.button }}
                label="退出"
                onClick={() => {
                  window.location.href = "/crm/#/GA001";
                }}
              />
            </Row>
          </Cell>
        ) : null}
      </Container>
    );
  }
}

ComAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(ComAppBar.combineStyles(styles))(ComAppBar);
