import ApolloClient, {createNetworkInterface} from 'apollo-client'
import {SubscriptionClient, addGraphQLSubscriptions} from 'subscriptions-transport-ws'

import {API_URL, WS_URL} from "./apiConf"


const wsClient = new SubscriptionClient(WS_URL(), {
    connectionParams: {
        authToken: "lars",
    },
    reconnect: true,
    // timeout: 30,
})

const networkInterface = createNetworkInterface({
    opts: {
        credentials: 'same-origin',
    },
    uri: API_URL(),
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
