import baseStyles from "../baseStyles";
const combineStyles = (...styles) => {
  return function CombineStyles(theme) {
    styles.push(baseStyles);
    const outStyles = styles.map(arg => {
      // Apply the "theme" object for style functions.
      if (typeof arg === "function") {
        return arg(theme);
      }
      // Objects need no change.
      return arg;
    });

    return outStyles.reduce((acc, val) => Object.assign(acc, val));
  };
};

export default combineStyles;
