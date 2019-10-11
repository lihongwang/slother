export default styles => {
  const flex = {
    // row
    row: {
      display: "flex",
      flexDirection: "row"
    },
    grsr: {
      display: "flex",
      justifyContent: "space-around"
    },
    grsb: {
      display: "flex",
      justifyContent: "space-between"
    },
    grauto: {
      "flex-basis": 0,
      "flex-grow": 1
    },
    grstart: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      height: "100%"
    },
    grcenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    },
    grend: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    // column
    column: {
      display: "flex",
      flexDirection: "column"
    },
    gcauto: {
      "flex-basis": 0,
      "flex-grow": 1
    },
    gcstart: {
      display: "flex",
      alignContent: "flex-start",
      width: "100%"
    },
    gcend: {
      display: "flex",
      alignContent: "flex-end",
      width: "100%"
    }
  };
  Object.assign(styles, flex);
  return styles;
};
