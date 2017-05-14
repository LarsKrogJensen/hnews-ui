import * as React from "react"
import {Search} from 'semantic-ui-react'
import {DocumentNode} from "graphql"
import graphql, {GraphQLDataProps} from "react-apollo/lib/graphql"
import {autobind} from "core-decorators"
import {Story} from "../api/typings"
const searchQuery: DocumentNode = require("../api/searchStories.graphql")


interface ISearchViewProps {
    data?: GraphQLDataProps,
    query: string,
    onSearch: (query: string) => any
}

class SearchView extends React.Component<ISearchViewProps, {}> {
    
    constructor(props: ISearchViewProps, context: any) {
        super(props, context)
    }

    public render() {
        const data = this.props.data;
        const loading = data ? data.loading : false
        const result: Story[] = data ? data["search"] : [];

        console.log("result: " + result)

        return (
            <Search icon='search'
                    placeholder='Search...'
                    loading={loading}
                    value={this.props.query}
                    results = {result}
                    fluid
                    onSearchChange={this.handleSearchChange}
                    className="app-search"/>
        )
    }

    @autobind
    private handleSearchChange(event: React.MouseEvent<HTMLElement>, value: string) {
        event.preventDefault()
        this.props.onSearch(value)
    }
}

interface ISearchInputProps {
    data?: GraphQLDataProps
}
interface ISearchInputState {
    query: string
}

export default class SearchInput extends React.Component<ISearchInputProps, ISearchInputState> {

    constructor(props: ISearchInputProps, context: any) {
        super(props, context)
        this.state = {query: ""}
    }

    public render() {
        const Wrapped = graphql(searchQuery,
               {
                   options: {
                       notifyOnNetworkStatusChange: true,
                       variables: {
                           query: this.state.query
                       }
                   }
               })(SearchView)

        return <Wrapped onSearch={this.onSearch} query={this.state.query}/>
    }
    

    @autobind
    private onSearch(query: string) {
        this.setState({query})
    }
}


