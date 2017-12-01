import * as React from "react"
import {DocumentNode} from "graphql"
import {graphql, OptionProps} from "react-apollo"
import {Time} from "../api/typings"
import {Res} from "awesome-typescript-loader/dist/checker/protocol"

const timeSubscription: DocumentNode = require("../api/timeSubscription.graphql")


interface Response {
    data: {
        time: Time
    }
}

interface ExternalProps {

}

interface Props {
    time: Time,
    loading: boolean

}


class TimePage extends React.Component<Props> {

    public render() {
        const time = this.props.time || {}

        console.log("render")
        return (
            <div style={{padding: 16}}>
                Time {time.hour} - {time.min} - {time.sec}
            </div>
        )
    }
}

type WrappedProps = Props & ExternalProps

const WithData: React.ComponentClass<ExternalProps> =
    graphql<Response, ExternalProps, WrappedProps>(timeSubscription, {
            props: (props: OptionProps<ExternalProps, Response>) => {

                return {
                    ...props.ownProps,
                    loading: props.data && props.data.loading,
                    time: props.data && props.data.data && props.data.data.time
                }
            }
        }
    )(TimePage)
export default WithData
