import * as React from "react"
import {inject, observer} from "mobx-react"
import {RouteComponentProps} from "react-router"
import {STORE_MAIN} from "../constants/stores"
import MainStore from "../stores/MainStore"

interface ITopPageProps extends RouteComponentProps<void> {
    // search store injected
}

@inject(STORE_MAIN)
@observer
export default class TopPage extends React.Component<ITopPageProps, {}> {
    public render() {
        const store: MainStore = this.props[STORE_MAIN]

        store.topStories.stories.forEach(story => {
            console.log(story)
        })
        return (

            <div>Top Page
            </div>
        )
    }
}
