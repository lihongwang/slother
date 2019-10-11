export default styles => {
  styles.delIcon = {
    "-webkit-touch-callout": "none",
    "-webkit-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none",
    "-moz-appearance": "none",
    "-webkit-appearance": "none",
    "background-color": "rgba(10, 10, 10, 0.2)",
    border: "none",
    "border-radius": "290486px",
    cursor: "pointer",
    "pointer-events": "auto",
    display: "inline-block",
    "flex-grow": "0",
    "flex-shrink": "0",
    "font-size": "0",
    height: "20px",
    "max-height": "20px",
    "max-width": "20px",
    "min-height": "20px",
    "min-width": "20px",
    outline: "none",
    position: "relative",
    "vertical-align": "top",
    width: "20px",
    "&:before": {
      "background-color": "white",
      content: "''",
      display: "block",
      left: "50%",
      position: "absolute",
      top: "50%",
      "-webkit-transform": "translateX(-50%) translateY(-50%) rotate(45deg)",
      transform: "translateX(-50%) translateY(-50%) rotate(45deg)",
      "-webkit-transform-origin": "center center",
      "transform-origin": "center center",
      height: "2px",
      width: "50%"
    },
    "&:after": {
      "background-color": "white",
      content: "''",
      display: "block",
      left: "50%",
      position: "absolute",
      top: "50%",
      "-webkit-transform": "translateX(-50%) translateY(-50%) rotate(45deg)",
      transform: "translateX(-50%) translateY(-50%) rotate(45deg)",
      "-webkit-transform-origin": "center center",
      "transform-origin": "center center",
      height: "50%",
      width: "2px"
    },
    "&:hover": {
      "background-color": "rgba(10, 10, 10, 0.3)"
    },
    "&:active": {
      "background-color": "rgba(10, 10, 10, 0.4)"
    },
    "&:focus": {
      "background-color": "rgba(10, 10, 10, 0.3)"
    }
  };
  return styles;
};
