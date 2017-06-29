import * as React from "react"
import {Icon, Search, SearchResultProps} from 'semantic-ui-react'
import {DocumentNode} from "graphql"
import {debounce} from "lodash-decorators"
import {autobind} from "core-decorators"
import {QueryType, Story} from "../api/typings"
import apolloClient from "../api/api"
import {ApolloQueryResult, WatchQueryOptions} from "apollo-client"
import {ReactElement} from "react"
import {unix} from "moment"


const searchQuery: DocumentNode = require("../api/searchStories.graphql")


interface ISearchViewProps {
    result: Story[],
    loading: boolean,
    query: string,
    onSearch: (query: string) => any,
    onSelect: (id: string) => void
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
                    placeholder='Search...'
                    loading={loading}
                    value={query}
                    results={result}
                    aligned="right"
                    resultRenderer={ (props: SearchResultProps) => this.resultRenderer(props)}
                    onSearchChange={this.handleSearchChange}
                    onResultSelect={this.handleResultSelect}
                    className="app-search"/>
        )
    }

    @autobind
    private handleSearchChange(event: React.MouseEvent<HTMLElement>, value: string) {
        this.props.onSearch(value)
    }

    @autobind
    private handleResultSelect(event: React.MouseEvent<HTMLDivElement>, data: SearchResultProps) {
        //
        // console.log(data)
        if (data.id) {
            this.props.onSelect(data.id.toString())
        }
    }

    
    @autobind
    private resultRenderer(props: any): Array<ReactElement<any>> {
        const story: Story = props
        const rr: Array<ReactElement<any>> = []
        rr.push(
            <div className="story">
                <div className="story-score">{story.score}</div>
                <div className="story-content">
                    <div className="story-title">{story.title}</div>
                    <div className="story-footer">
                        <div className="story-user"> by {story.by.id} </div>
                        <div className="story-time">{unix(story.time).fromNow()}</div>
                        <div className="story-comment"><Icon name="comments"/>{story.descendants} comments
                        </div>
                    </div>
                </div>
            </div>
        )
        return rr
    }
}

interface ISearchInputProps {
     onSelect: (id: string) => void
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
                           onSelect={this.props.onSelect}
                           {...this.state} />
    }


    @autobind
    private onSearch(query: string) {
        this.setState((prevState, props) => ({
            ...prevState,
            loading: true,
            query
        }))
        this.throttleSearch(query)
    }

    @debounce(300)
    private throttleSearch(query: string) {
        const options: WatchQueryOptions = {
            query: searchQuery,
            variables: {
                query
            }
        }

        apolloClient.query(options)
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
