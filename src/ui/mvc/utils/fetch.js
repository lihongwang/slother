import axios from "axios";
import baseConfig from "../../../../config/config";
let config = {
  baseURL: baseConfig.baseUrl,
  transformRequest: [
    function(data) {
      let ret = "";
      for (let it in data) {
        ret +=
          encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
      }
      return ret;
    }
  ],
  transformResponse: [
    function(data) {
      return data;
    }
  ],
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  timeout: 10000,
  responseType: "json"
};

// axios.interceptors.request.use(
//   con => {
//     // console.log(store.getters.token)
//     // if (store.getters.token) {
//     //   console.log(getToken())
//     //   con.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//     //   var token = getToken()
//     //   Object.assign(con.headers, { 'token': token })
//     // }
//     // return con
//   },
//   error => {
//     // Do something with request error
//     console.log(error); // for debug
//     Promise.reject(error);
//   }
// );

axios.interceptors.response.use(
  response => {
    console.log(response.data);
    const res = response.data;
    if (!res.code) {
      // error message
    } else {
      return response.data;
    }
  },
  error => {
    // error message
    return Promise.reject(error);
  }
);

export function get(url) {
  return axios.get(url, config);
}

export function post(url, data) {
  return axios.post(url, data, config);
}
