import React from 'react'
import ReactErrorBoundary from './components/ErrorBoundary'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { renderRoutes } from '@/routes'

const App = (): JSX.Element => {
	const router = createHashRouter(renderRoutes)

	return (
		<ReactErrorBoundary>
			<RouterProvider router={router} />
		</ReactErrorBoundary>
	)
}

export default App
