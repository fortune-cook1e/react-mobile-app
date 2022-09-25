import type { RouteObject, RouteProps } from 'react-router-dom'

export interface IRouteConfig extends RouteObject {
	element: any
	children?: IRouteConfig[]
}
