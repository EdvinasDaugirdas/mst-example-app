import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import './index.css'
import getStore from './models'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = getStore()

const renderApp = () => (
    <Provider appStore={store}>
        <App />
    </Provider>
)

ReactDOM.render(renderApp(), document.getElementById('root'))
registerServiceWorker()
