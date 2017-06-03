import * as React from "react"
import {RouteComponentProps} from "react-router"
import {DocumentNode} from "graphql"
import {graphql, QueryProps} from "react-apollo"
import {Time} from "../api/typings"
const timeSubscription: DocumentNode = require("../api/timeSubscription.graphql")


interface ITimeProvider {
    time: Time
}

interface ITimePageProps extends RouteComponentProps<any> {
    data: QueryProps & ITimeProvider
}

class TimePage extends React.Component<ITimePageProps, {}> {

    public render() {
        const data = this.props.data
        const time = data.time || {}

        console.log("render")
        return (
            <div style={{padding: 16}}>
                Time {time.hour} - {time.min} - {time.sec}
            </div>
        )
    }
}

export default graphql<ITimeProvider, ITimePageProps>(timeSubscription)(TimePage)
