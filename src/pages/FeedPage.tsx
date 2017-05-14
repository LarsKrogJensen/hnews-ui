import * as React from "react"
import {RouteComponentProps} from "react-router"
import {GraphQLDataProps} from "react-apollo/lib/graphql"
import {Story} from "../api/typings"
import FeedView from "../components/FeedView"


interface IFeedPageProps extends RouteComponentProps<void> {
    feed: string
}

export default class FeedPage extends React.Component<IFeedPageProps, {}> {
    public render() {

        const data: GraphQLDataProps = this.props["data"]
        const loading: boolean = data.loading
        const stories: Story[] = data[this.props.feed] || []

        return <FeedView loading={loading} stories={stories}/>
    }
}
