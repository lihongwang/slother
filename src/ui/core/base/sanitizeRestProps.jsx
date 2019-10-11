import keys from "lodash/keys";

import compose from "recompose/compose";

import { base, del, color, box, flex, fullColor } from "./styleRules";
export default rest => {
  keys(
    compose(
      base,
      color,
      flex,
      del,
      box,
      fullColor
    )({})
  ).forEach(k => {
    if (rest[k]) delete rest[k];
  });
  const {
    restOpts,
    classes,
    className,
    fullWidth,
    gridClassName,
    gbox,
    children,
    noPadding,
    noMargin,
    ..._rest
  } = rest;
  return _rest;
};
