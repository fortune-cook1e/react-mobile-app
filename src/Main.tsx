import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './styles/base.less'

const ROOT = document.getElementById('app') as HTMLDivElement

render(<App />, ROOT)
