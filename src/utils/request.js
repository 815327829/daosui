// src/utils/http.js
import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com", // API 基础地址，从环境变量中获取
	timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
	config => {
		// 在发送请求之前做些什么，例如加入 token
		// config.headers['Authorization'] = getToken();
		return config;
	},
	error => {
		// 对请求错误做些什么
		console.log(error); // for debug
		return Promise.reject(error);
	}
);

// 响应拦截器
service.interceptors.response.use(
	response => {
		const res = response.data;
		// 根据实际项目调整，处理正常响应和异常
		return res;
	},
	error => {
		console.log('err' + error); // for debug
		return Promise.reject(error);
	}
);

export default service;