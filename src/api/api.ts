import { ApolloClient } from 'apollo-client';
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {API_URL} from "./apiConf"

// import {SubscriptionClient, addGraphQLSubscriptions} from 'subscriptions-transport-ws'

//
// const wsClient = new SubscriptionClient(WS_URL(), {
//     connectionParams: {
//         authToken: "lars",
//     },
//     reconnect: true,
//     // timeout: 30,
// })

// const networkInterface = createNetworkInterface({
//     opts: {
//         credentials: 'same-origin',
//     },
//     uri: API_URL(),
// })
//
// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//     networkInterface,
//     wsClient,
// )

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({uri: API_URL()})
})


export default apolloClient
