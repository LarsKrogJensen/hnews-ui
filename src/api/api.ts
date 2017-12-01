import {ApolloLink, split} from 'apollo-link'
import {getMainDefinition} from 'apollo-utilities'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {RetryLink} from "apollo-link-retry"
import {WebSocketLink} from 'apollo-link-ws'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {API_URL, WS_URL} from "./apiConf"
import {FragmentDefinitionNode, OperationDefinitionNode} from "graphql"


const retryLink = new RetryLink({
    delay: op => 5000,
    max: op => 10000,
    interval: (delay, count) => 5000
})

const httpLink = new HttpLink({
    uri: API_URL
})

const wsLink = new WebSocketLink({
    options: {
        connectionParams: {
            authToke: "lars"
        },
        reconnect: true
    },
    uri: WS_URL()
})

const hybridLink = split(
    // split based on operation type
    ({query}) => {
        const node: OperationDefinitionNode | FragmentDefinitionNode = getMainDefinition(query)
        return node.kind === 'OperationDefinition' && node.operation === 'subscription'
    },
    wsLink,
    ApolloLink.from([retryLink, httpLink]),
)


const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: hybridLink
})


export default apolloClient
