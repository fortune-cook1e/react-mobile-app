import { RequestOptions, HttpResponse, ResponseCode } from '@/types'
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosRequestHeaders } from 'axios'
import config from './config'

interface RequestConfig extends AxiosRequestConfig {
	headers?: AxiosRequestHeaders
}

const defaultConfig: RequestConfig = {
	baseURL: config.apiPrefix,
	timeout: config.apiTimeout
}

// reference: https://blog.liufashi.top/2022/05/21/ts-axios/
const request = <T>(requestConfig: RequestOptions<T>): any => {
	const { interceptor } = requestConfig

	const finalConfig: RequestConfig = { ...defaultConfig, ...requestConfig }
	const instance: AxiosInstance = axios.create(finalConfig) // 使用传入的config覆盖默认
	instance.interceptors.request.use(config => {
		// 请求拦截器
		return interceptor?.request && typeof interceptor.request === 'function'
			? interceptor.request(config) // 在这里可以对请求参数做统一处理
			: (() => {
					return config
			  })()
	})

	instance.interceptors.response.use(
		(response: AxiosResponse<HttpResponse<any>>): HttpResponse<any> | Promise<never> => {
			const { data: axiosResponseData, status } = response
			const { code } = axiosResponseData

			if (status === 200 && code === ResponseCode.Success) {
				return interceptor?.response && typeof interceptor.response === 'function'
					? interceptor.response(response)
					: (() => {
							return axiosResponseData
					  })()
			} else {
				return Promise.reject(response.data)
			}
		},
		error => {
			return Promise.reject(error)
		}
	)
}

export default request
