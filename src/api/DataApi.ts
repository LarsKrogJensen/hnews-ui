import ApolloClient, {ApolloQueryResult, createNetworkInterface, WatchQueryOptions} from 'apollo-client'
import {QueryType, Story} from "./typings"
import {API_URL} from "./apiConf"
import {DocumentNode} from "graphql"
const topStoriesQuery: DocumentNode = require("./topStories.graphql")

export enum StoryType {
    TopStories,
    BestStories
}

export default class DataApi {
    private readonly client: ApolloClient
    private storyTypes: Map<StoryType, DocumentNode> = new Map([
        [StoryType.TopStories, topStoriesQuery],
        // [StoryType.TopStories, topStoriesQuery],
    ])

    constructor() {
        const networkInterface = createNetworkInterface({uri: API_URL + "/graphql"})

        this.client = new ApolloClient({
            connectToDevTools: true,
            networkInterface
        })
    }

    public stories(storyType: StoryType): Promise<Story[]> {
        const options: WatchQueryOptions = {
            query: topStoriesQuery,
            variables: {count: 100}
        }

        return this.client.query(options)
            .then((response: ApolloQueryResult<QueryType>) => response.data.topStories)
            .catch(error => console.error(error))

    }
}
