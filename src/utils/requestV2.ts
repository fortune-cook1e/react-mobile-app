import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
	baseURL: '/api',
	timeout: 3000
})

instance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		return config
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	(reponse: AxiosResponse) => {
		const { data } = reponse
		return data
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	}
)

export default instance
