import * as React from "react"
import {Search} from 'semantic-ui-react'
import {DocumentNode} from "graphql"
import graphql, {GraphQLDataProps} from "react-apollo/lib/graphql"
import {autobind} from "core-decorators"
import {QueryType, Story} from "../api/typings"
import apolloClient from "../api/api"
import {ApolloQueryResult, WatchQueryOptions} from "apollo-client"

const searchQuery: DocumentNode = require("../api/searchStories.graphql")


interface ISearchViewProps {
    result: Story[],
    loading: boolean,
    query: string,
    onSearch: (query: string) => any
}

class SearchView extends React.Component<ISearchViewProps, {}> {

    constructor(props: ISearchViewProps, context: any) {
        super(props, context)
    }

    public render() {
        const {loading, result, query} = this.props

        console.log("query: " + query)

        return (
            <Search icon='search'
                    open
                    placeholder='Search...'
                    loading={loading}
                    value={query}
                    results={result}
                    aligned="right"
                    onSearchChange={this.handleSearchChange}
                    className="app-search"/>
        )
    }

    @autobind
    private handleSearchChange(event: React.MouseEvent<HTMLElement>, value: string) {
        // event.preventDefault()
        this.props.onSearch(value)
    }
}

interface ISearchInputProps {
    data?: GraphQLDataProps
}
interface ISearchInputState {
    query: string,
    loading: boolean,
    result: Story[]
}

export default class SearchViewContainer extends React.Component<ISearchInputProps, ISearchInputState> {

    constructor(props: ISearchInputProps, context: any) {
        super(props, context)
        this.state = {
            loading: false,
            query: "",
            result: []
        }
    }

    public render() {
        return <SearchView onSearch={this.onSearch}
                           {...this.state} />
    }


    @autobind
    private onSearch(query: string) {
        this.setState((prevState, props) => ({
            ...prevState,
            loading: true,
            query
        }))
        const options: WatchQueryOptions = {
            query: searchQuery,
            variables: {
                query
            }
        }

        return apolloClient.query(options)
            .then((response: ApolloQueryResult<QueryType>) => response.data.search)
            .then(result => this.handleResult(result || []))
            .catch(error => console.error(error))

    }

    private handleResult(result: Story[]) {
        this.setState((prevState, props) => ({
            ...prevState,
            loading: false,
            result
        }))
    }
}


