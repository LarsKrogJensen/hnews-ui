import * as React from "react"
import {RouteComponentProps} from "react-router"
import {STORE_MAIN} from "../constants/stores"

interface IBestPageProps extends RouteComponentProps<void> {
    // hnews store injected
}

export default class BestPage extends React.Component<IBestPageProps, {}> {
    public render() {
        return (<div>Best Stories</div>)
    }
}
