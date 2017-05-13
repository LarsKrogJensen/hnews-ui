import * as React from "react"
import {RouteComponentProps} from "react-router"
import {STORE_MAIN} from "../constants/stores"
import MainStore from "../stores/MainStore"
import {Loader} from "semantic-ui-react"
import {Story} from "../api/typings"

interface IStoryPage extends RouteComponentProps<void> {
    // search store injected
}

export default class StoryPage extends React.Component<IStoryPage, {}> {

    public render() {
        // const store: MainStore = this.props[STORE_MAIN]
        //
        // const id = this.props.match.params["id"]
        // const story = store.stories.get(id)
        // if (!story) {
        //     store.story(id)
        // }

        return (
            <div>
                {/*<Loader active={!story} inline='centered'/>*/}
                {/*{story && this.renderStory(story)}*/}
                <div>story page</div>
            </div>
        )
    }

    private renderStory(story: Story) {
        return (
            <div>Story id {story.id}</div>
        )
    }
}
