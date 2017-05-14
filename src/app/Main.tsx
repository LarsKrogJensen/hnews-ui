import * as React from 'react'
import {API_URL} from "../api/apiConf"
import ApolloProvider from "react-apollo/src/ApolloProvider"
import {HashRouter as Router} from 'react-router-dom'
import {ApolloClient, createNetworkInterface} from 'react-apollo'
import App from './App'

const networkInterface = createNetworkInterface({uri: API_URL + "/graphql"})

const client = new ApolloClient({
    connectToDevTools: true,
    networkInterface
})

export default class Main extends React.Component<{}, {}> {
    public render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <App />
                </Router>
            </ApolloProvider>
        )

    }
}
