import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import {App} from './App'
import {AppContainer} from 'react-hot-loader'
import {ApolloClient, createNetworkInterface} from 'react-apollo'
import "./theme.less"
import 'semantic-ui-css/semantic.min.css'
import {API_URL} from "../api/apiConf"
import ApolloProvider from "react-apollo/src/ApolloProvider"


const networkInterface = createNetworkInterface({uri: API_URL + "/graphql"})

const client = new ApolloClient({
    connectToDevTools: true,
    networkInterface
})

function renderApp() {
    ReactDOM.render(
        <ApolloProvider client={client}>
            <Router>
                <App/>
            </Router>
        </ApolloProvider>,
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

