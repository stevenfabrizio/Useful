import React from 'react'
import { render } from 'react-dom'

import App from './App'
require('./styles.css')

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)