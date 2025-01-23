import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './containers/App'
import 'tachyons'

const appRender = createRoot(document.getElementById('root'))

appRender.render(<App />)