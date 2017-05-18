import * as React from "react"
import {Story} from "../api/typings"
import StoryItem from "./StoryItem"
import {Divider, Loader, Feed} from "semantic-ui-react"

interface IFeedViewProps {
    stories: Story[],
    loading: boolean
}
export default class FeedView extends React.Component<IFeedViewProps, any> {
    public render() {
        const {loading, stories} = this.props

        const items = stories.map(story => (
            <div key={story.id}>
                <StoryItem story={story}/>
                <Divider style={{margin: 8}} />
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
