import { IRouteConfig } from '@/types'
import { lazy } from 'react'

export const routes: IRouteConfig[] = [
	{
		path: '/',
		caseSensitive: true,
		element: lazy(() => import('@/pages/home'))
	},
	{
		path: '/visual-preview',
		caseSensitive: true,
		element: lazy(() => import('@/pages/visual-preview'))
	}
]
