import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import './index.css'
import createStore from './models'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore()

const renderApp = () => (
    <Provider appStore={store}>
        <App />
    </Provider>
)

ReactDOM.render(renderApp(), document.getElementById('root'))
registerServiceWorker()
