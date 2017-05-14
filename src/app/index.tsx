import * as React from 'react'
import * as ReactDOM from 'react-dom'
import apolloClient from "../api/api"
import ApolloProvider from "react-apollo/src/ApolloProvider"
import {HashRouter as Router} from 'react-router-dom'
import App from './App'
import {AppContainer} from 'react-hot-loader'
import "./theme.less"
import 'semantic-ui-css/semantic.min.css'


function renderApp() {
    ReactDOM.render(
        <ApolloProvider client={apolloClient}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>,
        document.getElementById('root'),
    )
}

if (module.hot) {
    module.hot.accept()
    renderApp()
} else {
    renderApp()
}

