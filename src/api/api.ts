import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {SubscriptionClient, addGraphQLSubscriptions} from 'subscriptions-transport-ws'

import {API_URL} from "./apiConf"


const wsClient = new SubscriptionClient('ws://localhost:8080/graphqlws')

const networkInterface = createNetworkInterface({
    opts: {
        credentials: 'same-origin',
    },
    uri: API_URL + '/graphql',
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
    networkInterface,
    wsClient,
)

const apolloClient = new ApolloClient({
    connectToDevTools: true,
    networkInterface: networkInterfaceWithSubscriptions,
})

export default apolloClient
