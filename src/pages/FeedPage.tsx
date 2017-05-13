import * as React from "react"
import {RouteComponentProps} from "react-router"
import {DocumentNode} from "graphql"
import graphql, {GraphQLDataProps} from "react-apollo/lib/graphql"
import {Story} from "../api/typings"
import FeedView from "../components/FeedView"
const topStoriesQuery: DocumentNode = require("../api/topStories.graphql")
const newStoriesQuery: DocumentNode = require("../api/newStories.graphql")
const bestStoriesQuery: DocumentNode = require("../api/bestStories.graphql")


interface IFeedPageProps extends RouteComponentProps<void> {
    feed: string
}

class FeedPage extends React.Component<IFeedPageProps, {}> {
    public render() {

        const data: GraphQLDataProps = this.props["data"]
        const loading: boolean = data.loading
        const stories: Story[] = data[this.props.feed] || []

        return <FeedView loading={loading} stories={stories}/>
    }
}

const connectFeed = (feed: string, query: DocumentNode) => {
    return graphql(query,
        {
            options: {
                notifyOnNetworkStatusChange: true,
                variables: {
                    count: 100
                },
            },
            props: (p) => ({...p, feed})
        })
}

export const TopFeedPage = connectFeed("topStories", topStoriesQuery)(FeedPage)
export const NewFeedPage = connectFeed("newStories", newStoriesQuery)(FeedPage)
export const BestFeedPage = connectFeed("bestStories", bestStoriesQuery)(FeedPage)
