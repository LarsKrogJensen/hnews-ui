import * as React from "react"
import {RouteComponentProps} from "react-router"
import {Story} from "../api/typings"

import StoryItem from "../components/StoryItem"
import {Divider, Feed, Loader} from "semantic-ui-react"

export interface IFeedPageProps extends RouteComponentProps<void> {
    loading: boolean
    stories: Story[]
}

export default class FeedPage extends React.Component<IFeedPageProps, {}> {
    public render() {

        const {loading, stories} = this.props

        const items = stories.map(story => (
            <div key={story.id}>
                <StoryItem story={story}/>
                <Divider style={{margin: 8}}/>
            </div>
        ))
        return (
            <div style={{padding: 16}}>
                <Loader active={loading} inline='centered'/>

                <Feed>
                    {items}
                </Feed>
            </div>
        )
    }
}
