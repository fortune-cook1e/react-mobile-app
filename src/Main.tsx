import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/base.less'

const ROOT = document.getElementById('app') as HTMLDivElement

const root = createRoot(ROOT)

root.render(<App />)
