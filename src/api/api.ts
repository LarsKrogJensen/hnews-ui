import ApolloClient, {ApolloQueryResult, createNetworkInterface, WatchQueryOptions} from 'apollo-client'

import {API_URL} from "./apiConf"


const networkInterface = createNetworkInterface({uri: API_URL + "/graphql"})

const apolloClient = new ApolloClient({
    connectToDevTools: true,
    networkInterface
})

export default apolloClient;


// export default class DataApi {
//     private readonly client: ApolloClient
//
//     constructor() {
//         const networkInterface = createNetworkInterface({uri: API_URL + "/graphql"})
//
//         this.client = new ApolloClient({
//             connectToDevTools: true,
//             networkInterface
//         })
//     }
//
//     public stories(query: StoryQuery): Promise<Story[]> {
//         const options: WatchQueryOptions = {
//             query: queries[query],
//             variables: {count: 100}
//         }
//
//         return this.client.query(options)
//             .then((response: ApolloQueryResult<QueryType>) => response.data[query])
//             .catch(error => console.error(error))
//
//     }
//
//     public story(id: string): Promise<Story> {
//         const options: WatchQueryOptions = {
//             query: storyQuery,
//             variables: {id}
//         }
//
//         return this.client.query(options)
//             .then((response: ApolloQueryResult<QueryType>) => response.data.story)
//             .catch(error => console.error(error))
//
//     }
// }
