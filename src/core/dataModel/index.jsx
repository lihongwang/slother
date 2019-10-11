import each from "lodash/each";
import isFunction from "lodash/isFunction";
import upperFirst from "lodash/upperFirst";
import BaseModel from "./BaseModel";
export default {
  prepareFunctions: function(k) {
    const funcs = {};
    //   getXXX
    funcs[`get${upperFirst(k)}`] = function(key, params) {
      return keys
        ? isFunction(this[k][key])
          ? this[k][key](params)
          : this[k][key]
        : this[k];
    };
    //   setXXX
    funcs[`set${upperFirst(k)}`] = function(key, value) {
      return isFunction(this[k][key])
        ? this[k][key](value)
        : this[k].set(key, value);
    };
    //   overrideXXX
    funcs[`override${upperFirst(k)}`] = function(obj) {
      return this[k].override(obj);
    };
    //   getXXXSession
    funcs[`get${upperFirst(k)}Session`] = function(key) {
      return this[k].getSession ? this[k].getSession(key) : null;
    };
    //   emptyXXXSession
    funcs[`empty${upperFirst(k)}Session`] = function(key, params) {
      if (this[k].emptySession) this[k].emptySession();
    };
  },
  attrs: models,
  extend: function(data) {
    if (data.own) each(data.own, (v, k) => this.attrs[k].overrideAll(v));
    if (data.ext)
      each(data.ext, (v, k) => (this.attrs[k] = new BaseModel({ rowData: v })));
  },
  setAttrs: function(attrs) {
    this.attrs = attrs;
  },
  getAttrs: function(key) {
    return key ? this.attrs[key] : this.attrs;
  }
};
