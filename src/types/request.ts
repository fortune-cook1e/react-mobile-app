import { Method, AxiosRequestConfig } from 'axios'

export enum ResponseCode {
	Success = 0,
	Fail = 2,
	LoginExpired = 10000
}

export interface HttpResponse<T = any> {
	code: ResponseCode
	msg: string
	data: T
}

export interface RequestOptions<T> {
	url: string
	method?: Method
	data?: T
	params?: T
	config?: AxiosRequestConfig
	interceptor?: {
		request?: any
		response?: any
	}
	options?: {
		globalLoading?: boolean // 是否开启全局loading
		customError?: boolean // 是否自定义处理错误
	}
}

export interface PageRequest {
	page: number
	page_size: number
}

export interface PageResponse extends PageRequest {
	total: number
}

export type PromiseHttpRes<T = any> = Promise<HttpResponse<T>>
