import * as React from "react"
import {RouteComponentProps} from "react-router"
import {STORE_MAIN} from "../constants/stores"
import MainStore from "../stores/MainStore"
import {Feed, Icon, Loader, Divider} from 'semantic-ui-react'
import StoryItem from "../components/StoryItem"
import {DocumentNode} from "graphql"
import graphql from "react-apollo/lib/graphql"
import {Story} from "../api/typings"
const topStoriesQuery: DocumentNode = require("../api/topStories.graphql")


interface ITopPageProps extends RouteComponentProps<void> {
}

class TopPage extends React.Component<ITopPageProps, {}> {
    public render() {

        const data: any = this.props["data"]
        const loading: boolean = data.loading
        const stories: Story[] = data.topStories || []

        const items = stories.map(story => (
            <div key={story.id}>
                <StoryItem story={story}/>
                <Divider />
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

const TopPageWithData = graphql(topStoriesQuery,
    {
        options: {
            notifyOnNetworkStatusChange: true,
            variables: {
                count: 100
            }
        }
    })(TopPage)

export default TopPageWithData
