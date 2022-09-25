import React, { Suspense } from 'react'
import { routes } from './routes'
import { useRoutes } from 'react-router-dom'
import NotFound from '@/pages/not-found'
import { IRouteConfig } from '@/types'

function lazyRoute(props: any) {
	const { component } = props
	const Component = component
	return (
		<Suspense fallback={<div>加载中...</div>}>
			<Component />
		</Suspense>
	)
}

function processRoutes(routes: IRouteConfig[]) {
	if (!routes.length) return []
	// 遍历增加权限HOC
	routes.forEach((route: IRouteConfig) => {
		const { element } = route
		const Component = element
		route.element = lazyRoute({ component: Component })
		!!route?.children && processRoutes(route.children)
	})
	return routes
}

export const renderRoutes: IRouteConfig[] = [
	...processRoutes(routes),
	{
		path: '*',
		element: <NotFound />
	}
]

// export default RouteElement
