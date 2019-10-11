import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import upperFirst from "lodash/upperFirst";
import each from "lodash/each";
import includes from "lodash/includes";
import model from "./dataModel";

class PageModel {
  constructor(props) {
    this.props = props;
    this.prepareAttrsAndFuncs();
  }
  prepareAttrsAndFuncs() {
    const { attrs } = this.props;
    model.setAttrs(attrs);
    const common = this.extendedToCommon();
    each(common, (v, k) => {
      this[k] = v;
      each(model.prepareFunctions(k), (method, methodName) => {
        this[methodName] = method;
      });
    });

    // emptySession
    this.constructor.prototype.emptySession = function(key, excepts = []) {
      const emptyFuncN = `empty${upperFirst(key)}Session`;
      if (key && this[emptyFuncN]) {
        this[emptyFuncN]();
      } else {
        each(common, (v, k) => {
          if (!includes(excepts, k)) this[emptyFuncN]();
        });
      }
    };

    // emptyAll
    this.constructor.prototype.empty = function(key, excepts = []) {
      if (key && this[key] && this[key].empty) {
        this[key].empty();
      } else {
        each(common, (v, k) => {
          if (!includes(excepts, key) && this[k] && this[k].empty)
            this[k].empty();
        });
      }
    };
  }
  extendedToCommon() {
    const { pageId, dataPath } = this.props;
    if (pageId) {
      let data;
      try {
        data = require(dataPath);
      } catch (e) {
        data = {
          default: {
            ext: {},
            own: {}
          }
        };
      }
      model.extend(data.default);
    }
    return model;
  }
  set(obj) {
    each(obj, (v, k) => (this[k] = v));
  }
  get(keys) {
    if (isArray(keys)) {
      const obj = {};
      each(keys, k => (obj[k] = this[k]));
      return obj;
    } else {
      return this[keys];
    }
  }
}
