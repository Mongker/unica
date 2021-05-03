/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 01/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'http://localhost:2020/api',
    headers: { 'X-Custom-Header': 'foobar', 'Content-Type': 'application/json' },
});
//interceptors
// Add a request interceptors
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is send
        console.log('config', config); // MongLV log fix bug
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);
// Add a response interceptors
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);
export default axiosClient;
