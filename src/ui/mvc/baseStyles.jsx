export default theme => ({
  pageRoot: {
    display: "flex",
    height: "100%",
    width: "100%"
  },
  _layout: {
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
    backgroundColor: theme.palette.background.default,
    height: "100%",
    overflow: "hidden",
    width: "100%"
  },
  _main: {
    overflow: "hidden",
    overflowY: "auto",
    "-webkit-overflow-scrolling": "touch",
    flex: "1 1 auto"
  },
  _content: {
    width: "100%",
    padding: "5px 0",
    // padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(800 + theme.spacing.unit * 2 * 2)]: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  _paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  center: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  border: {
    border: "1px solid #d9d9d9",
  },
  button: {
    width: "100%",
    "border-radius": "6px"
  },
  _footer: {
    "border-top": "1px solid #d9d9d9",
    "padding-top": "10px"
  }
});
