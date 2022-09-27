import { FetchVisualListResponse } from './../types/visual'
import { PromiseHttpRes } from './../types/request'
import request from '@/utils/requestV3'

export const getVisualList = (): PromiseHttpRes<FetchVisualListResponse> =>
	request({
		url: '/visual/list',
		method: 'get'
	})
