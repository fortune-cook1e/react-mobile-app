import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
const { resolve } = path

const PORT = 8082
const API_PREFIX = '/api'
const API_HOST = 'http://localhost:3000'

const PATHS = {
	// Source files
	src: resolve(__dirname, './src'),

	// Production build files
	build: resolve(__dirname, './dist'),

	// Static files that get copied to build folder
	public: resolve(__dirname, './public')
}

// docs: https://cn.vitejs.dev/guide/
export default defineConfig({
	plugins: [react()],
	define: {
		IS_DEV: false
	},
	css: {
		postcss: resolve(__dirname, './postcss.config.js')
	},
	resolve: {
		alias: {
			'@': PATHS.src
		}
	},
	server: {
		port: PORT,
		strictPort: true,
		proxy: {
			[`${API_PREFIX}`]: {
				target: API_HOST,
				rewrite: path => path.replace(/^\/api/, '')
			}
		}
	}
})
