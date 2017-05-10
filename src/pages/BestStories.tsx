import * as React from "react"
import {inject, observer} from "mobx-react"
import {RouteComponentProps} from "react-router"
import {STORE_MAIN} from "../constants/stores"

interface IBestPageProps extends RouteComponentProps<void> {
    // hnews store injected
}

@inject(STORE_MAIN)
@observer
export default class BestPage extends React.Component<IBestPageProps, {}> {
    public render() {
        return (<div>Best Stories</div>)
    }
}
