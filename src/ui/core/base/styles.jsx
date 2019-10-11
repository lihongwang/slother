import compose from "recompose/compose";

import { base, del, color, box, flex, fullColor } from "./styleRules";
let styles = {
  root: {
    display: "flex"
  },
  flex: {
    display: "flex"
  },
  isFlex: {
    display: "flex"
  },
  box10: {
    padding: "10px"
  },
  isSmall: {
    height: "16px",
    "max-height": "16px",
    "max-width": "16px",
    "min-height": "16px",
    "min-width": "16px",
    width: "16px"
  },
  isMedium: {
    height: "24px",
    "max-height": "24px",
    "max-width": "24px",
    "min-height": "24px",
    "min-width": "24px",
    width: "24px"
  },
  isLarge: {
    height: "32px",
    "max-height": "32px",
    "max-width": "32px",
    "min-height": "32px",
    "min-width": "32px",
    width: "32px"
  },
  isRound: {
    "border-radius": "290486px",
    "padding-left": "1em",
    "padding-right": "1em"
  },
  marginC: {
    margin: "0 auto"
  },
  isCenter: {
    "justify-content": "center"
  },
  isFluid: {
    "margin-left": "32px",
    "margin-right": "32px",
    "max-width": "none"
  },
  isFlexFull: {
    flex: "1 1 auto"
  },
  buttons: {
    "align-items": "center",
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "flex-start"
  },
  hidden: {
    opacity: 0,
    display: "none"
  },
  shown: {
    opacity: 1,
    display: ""
  },
  _tc: {
    textAlign: "center"
  },
  _tl: {
    textAlign: "left"
  },
  _tr: {
    textAlign: "right"
  }
};

compose(
  base,
  color,
  del,
  box,
  flex,
  fullColor
)(styles);
export default styles;
