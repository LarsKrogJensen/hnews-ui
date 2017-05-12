import * as React from "react"
import {inject, observer} from "mobx-react"
import {RouteComponentProps} from "react-router"
import {STORE_MAIN} from "../constants/stores"
import MainStore from "../stores/MainStore"
import {Feed, Icon, Loader, Divider} from 'semantic-ui-react'
import StoryItem from "../components/StoryItem"

interface ITopPageProps extends RouteComponentProps<void> {
    // search store injected
}

@inject(STORE_MAIN)
@observer
export default class TopPage extends React.Component<ITopPageProps, {}> {
    public render() {
        const store: MainStore = this.props[STORE_MAIN]

        const {stories, loading} = store.topStories

        const items = stories.map(story => (
            <div>
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
