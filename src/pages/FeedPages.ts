import {DocumentNode} from "graphql"
import graphql from "react-apollo/lib/graphql"
import FeedPage from "./FeedPage"
const topStoriesQuery: DocumentNode = require("../api/topStories.graphql")
const newStoriesQuery: DocumentNode = require("../api/newStories.graphql")
const bestStoriesQuery: DocumentNode = require("../api/bestStories.graphql")
const askStoriesQuery: DocumentNode = require("../api/askStories.graphql")
const showStoriesQuery: DocumentNode = require("../api/showStories.graphql")
const jobStoriesQuery: DocumentNode = require("../api/jobStories.graphql")


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
export const AskFeedPage = connectFeed("askStories", askStoriesQuery)(FeedPage)
export const ShowFeedPage = connectFeed("showStories", showStoriesQuery)(FeedPage)
export const JobFeedPage = connectFeed("jobStories", jobStoriesQuery)(FeedPage)
