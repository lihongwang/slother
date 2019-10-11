import upperFirst from "lodash/upperFirst";

export default styles => {
  ["padding", "margin"].forEach(b => {
    ["top", "right", "bottom", "left", "v", "h", ""].forEach(p => {
      [0, 5, 10, 15, 20, 25, 30].forEach(s => {
        let obj = {};
        if (p === "v") {
          obj[`${b}`] = `${s}px 0`;
        } else if (p === "h") {
          obj[`${b}`] = `0 ${s}px`;
        } else if (p === "") {
          obj[b] = `${s}px`;
          styles[b] = obj;
        } else {
          obj[`${b}${upperFirst(p)}`] = `${s}px`;
          styles[`${b}${upperFirst(p)}${s}`] = obj;
        }
        styles[`${b}${p.charAt(0).toUpperCase()}${s}`] = obj;
      });
    });
  });
  ["width", "height"].forEach(n => {
    [20, 30, 40, 50, 60, 70, 80, 100, 120, 150, 200].forEach(s => {
      let obj = {};
      obj[n] = `${s}px !important`;
      obj[`min-${n}`] = `${s}px`;
      styles[`${n.charAt(0)}${s}`] = obj;
      styles[`${n}${s}`] = obj;
    });
  });
  Object.assign(styles, {
    noPadding: {
      padding: "0 !important"
    },
    noMargin: {
      margin: "0 !important"
    },
    fullWidth: {
      width: "100%"
    },
    fullHeight: {
      height: "100%"
    },
    borderL: {
      borderLeft: "1px solid #d9d9d9"
    },
    borderR: {
      borderRight: "1px solid #d9d9d9"
    },
    borderT: {
      borderTop: "1px solid #d9d9d9"
    },
    borderB: {
      borderBottom: "1px solid #d9d9d9",
      "&:last-of-type": {
        border: "none"
      }
    },
    border: {
      border: "1px solid #d9d9d9"
    }
  });
  return styles;
};
