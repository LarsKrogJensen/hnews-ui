import * as React from "react"
import {RouteComponentProps} from "react-router"

interface IJobPageProps extends RouteComponentProps<void> {
    // hnews store injected
}

export default class JobPage extends React.Component<IJobPageProps, {}> {
    public render() {
        return (<div>Jobs Page</div>)
    }
}
