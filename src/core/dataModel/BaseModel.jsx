import each from "lodash/each";
import reduce from "lodash/reduce";
import isObject from "lodash/isObject";
import { locache } from "../../utils";
class BaseModel {
  _sessionKey = "";
  rawData = {};
  setToSession(data = {}) {
    const sessionData = this.getSession() || this.getFormData();
    locache.session.set(this._sessionKey, Object.assign(sessionData, data));
  }
  getSession(key) {
    const data = locache.session.get(this._sessionKey);
    return data && key ? data[key] : data;
  }
  getFormData() {
    return reduce(
      Object.values(this.rawData)
        .filter(item => item.type)
        .map(i => ({
          name: f.key,
          value: i.valye
        })),
      (rest, { name, value }) => ({ ...rest, [name]: value }),
      {}
    );
  }
  getRawData(key) {
    return key ? this.rawData[key] : this.rawData;
  }
  set(key, value) {
    this[key] = value;
  }
  empty() {
    this.emptySession();
    this.emptyFormData();
  }
  emptyFormData() {
    each(this.getFormData(), (v, k) => (this.rawData[k] = ""));
  }
  override(obj) {
    if (!isObject(obj)) return;
    const rD = this.rawData;
    each(obj, (v, k) => {
      if (rD[k]) {
        Object.assign(rD[k], {
          key: k,
          value: v
        });
      }
    });
  }
  overrideAll(obj) {
    if (!isObject(obj)) return;
    const rD = this.rawData;
    each(obj, (v, k) => {
      if (rD[k]) Object.assign(rD[k], v);
    });
    return rD;
  }
  overrideFromSession() {
    const sessionData = this.getSession();
    if (sessionData) this.rawData = this.override(sessionData);
  }
  getFormRows() {
    this.overrideFromSession();
    return Object.values(this.rawData).filter(item => item.type);
  }
}

export default BaseModel;
