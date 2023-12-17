import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  function (config) {
    // console.log("인터셉트 요청 성공");
    return config;
  },
  function (error) {
    // console.log("인터셉트 요청 실패");
    alert("인터셉트 요청 실패");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // console.log("인터셉트 응답 성공");
    return response;
  },
  function (error) {
    // console.log("인터셉터 응답 오류");
    alert("인터셉트 응답 실패");
    return Promise.reject(error);
  }
);

export default instance;
