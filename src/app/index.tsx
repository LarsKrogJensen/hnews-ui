import {useStrict} from 'mobx'
import {Provider} from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import DataApi from "../api/DataApi"
import {STORE_MAIN} from '../constants/stores'
import {App} from './App'
import "./theme.less"
import {AppContainer} from 'react-hot-loader'
import 'semantic-ui-css/semantic.min.css';
import MainStore from "../stores/MainStore"
// enable MobX strict mode
useStrict(true)

const dataApi: DataApi = new DataApi()

const rootStores = {
    [STORE_MAIN]: new MainStore(dataApi),
}

function renderApp() {
    ReactDOM.render(
        <AppContainer>
            <Provider {...rootStores}>
                <Router>
                    <App/>
                </Router>
            </Provider >
        </AppContainer>,
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

