import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Main from './Main'
import {AppContainer} from 'react-hot-loader'
import "./theme.less"
import 'semantic-ui-css/semantic.min.css'


function renderApp() {
    ReactDOM.render(
        <Main/>,
        document.getElementById('root'),
    )
}
// const module = require('webpack-env')

if (module.hot) {
    module.hot.accept()
    renderApp()
} else {
    renderApp()
}

