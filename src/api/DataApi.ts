import ApolloClient, {ApolloQueryResult, createNetworkInterface, WatchQueryOptions} from 'apollo-client'
import {QueryType, Story} from "./typings"
import {API_URL} from "./apiConf"
import {DocumentNode} from "graphql"
const topStoriesQuery: DocumentNode = require("./topStories.graphql")

export const TopStoryQuery = "topStories"
export const BestStoryQuery = "bestStories"

export type StoryQuery = typeof TopStoryQuery | typeof BestStoryQuery

const queries = {
    [TopStoryQuery]: topStoriesQuery,
    [BestStoryQuery]: topStoriesQuery
}


export default class DataApi {
    private readonly client: ApolloClient

    constructor() {
        const networkInterface = createNetworkInterface({uri: API_URL + "/graphql"})

        this.client = new ApolloClient({
            connectToDevTools: true,
            networkInterface
        })
    }

    public stories(query: StoryQuery): Promise<Story[]> {
        const options: WatchQueryOptions = {
            query: queries[query],
            variables: {count: 100}
        }

        return this.client.query(options)
            .then((response: ApolloQueryResult<QueryType>) => response.data[query])
            .catch(error => console.error(error))

    }
}
