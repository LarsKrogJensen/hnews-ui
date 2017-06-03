import * as React from "react"
import {RouteComponentProps} from "react-router"
import {Story} from "../api/typings"
import FeedView from "../components/FeedView"
import {QueryProps} from "react-apollo"

export interface IFeedPageProps extends RouteComponentProps<void> {
    feed: string
    data: QueryProps
}

export default class FeedPage extends React.Component<IFeedPageProps, {}> {
    public render() {

        const {data, feed} = this.props
        const stories: Story[] = data[feed] || []

        return <FeedView loading={data.networkStatus === 1} stories={stories}/>
    }
}
