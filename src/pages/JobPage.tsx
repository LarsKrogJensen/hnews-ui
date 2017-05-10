import * as React from "react"
import {inject, observer} from "mobx-react"
import {RouteComponentProps} from "react-router"
import {STORE_MAIN} from "../constants/stores"

interface IJobPageProps extends RouteComponentProps<void> {
    // hnews store injected
}

@inject(STORE_MAIN)
@observer
export default class JobPage extends React.Component<IJobPageProps, {}> {
    public render() {
        return (<div>Jobs Page</div>)
    }
}
