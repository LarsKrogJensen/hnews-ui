// const HostAndPort = "localhost:8080"
// export const API_URL =
// import { print } from 'graphql-tag';

export const API_URL = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        // return "https://hnews-gql.herokuapp.com/graphql"
        return "http://localhost:8080/graphql"
    } else {
        return "https://hnews-gql.herokuapp.com/graphql"
    }

}

export const WS_URL = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        // return 'wss://hnews-gql.herokuapp.com/subscriptions'
        return 'ws://localhost:8080/subscriptions'
    } else {
        return 'wss://hnews-gql.herokuapp.com/subscriptions'
    }

}

// export function addGraphQLSubscriptions(networkInterface, wsClient) {
//     return Object.assign(networkInterface, {
//         subscribe(request, handler) {
//             return wsClient.subscribe({
//                 query: request.query,
//                 variables: request.variables,
//             }, handler)
//         },
//         unsubscribe(id) {
//             wsClient.unsubscribe(id)
//         },
//     })
// }
