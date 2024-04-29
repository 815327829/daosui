import request from '@/utils/request'

//使用
export function getInfo(params) {
	return request({
		url: '/todos/1',
		method: 'get',
		params
	});
}