import * as React from "react"
import {RouteComponentProps} from "react-router"
import {STORE_MAIN} from "../constants/stores"

interface IAskPageProps extends RouteComponentProps<void> {
    // hnews store injected
}

export default class AskPage extends React.Component<IAskPageProps, {}> {
    public render() {
        return (<div>Ask Page</div>)
    }
}
