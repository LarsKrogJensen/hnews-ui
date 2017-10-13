import * as React from "react"
import {RouteComponentProps} from "react-router"
import {DocumentNode} from "graphql"

import {graphql, QueryProps} from "react-apollo"
import {Comment as CommentItem, Story} from "../api/typings"
import {Comment, Header, Loader} from "semantic-ui-react"
import * as moment from "moment"
// import {Fade, Flip, Rotate, Zoom} from 'react-reveal'

const storyQuery: DocumentNode = require("../api/fullStory.graphql")


interface IStoryProvider {
    story: Story
}

interface IStoryPageProps extends RouteComponentProps<any> {
    data: QueryProps & IStoryProvider
}

class StoryPage extends React.Component<IStoryPageProps, {}> {

    public render() {
        const data = this.props.data
        const loading = data.loading
        const story: Story = data.story

        return (
            <div style={{padding: 16}}>
                <Loader active={loading} inline='centered'/>
                {story && this.renderStory(story)}
            </div>
        )
    }

    private renderStory(story: Story) {
        return (
            <div>
                <h3>{story.title}</h3>
                {story.url && <a href={story.url} target="_blank">link</a>}
                {this.renderComments(story.comments, <Header as='h3' dividing>Comments</Header>)}
            </div>
        )
    }

    private renderComments(comments?: CommentItem[], header: JSX.Element | null = null) {
        if (!comments || comments.length === 0) {
            return null
        }

        return (
            <Comment.Group threaded>
                {comments.map(comment => this.renderComment(comment))}
            </Comment.Group>
        )
    }

    private renderComment(comment: CommentItem) {

        const html = {__html: comment.text || ""}
        const by = comment.by ? comment.by.id : "deleted?"
        return (
            <Comment key={comment.id}>
                <Comment.Content>
                    <Comment.Author as='a'>{by}</Comment.Author>
                    <Comment.Metadata>
                        <div>{moment(comment.time * 1000).fromNow()}</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        <div dangerouslySetInnerHTML={html}/>
                    </Comment.Text>
                    <Comment.Actions>
                        <a>Reply</a>
                    </Comment.Actions>
                </Comment.Content>

                {this.renderComments(comment.comments)}
            </Comment>
        )
    }
}

const StoryPageWithData: React.StatelessComponent<IStoryPageProps> = props => {
    const Wrapped = graphql(storyQuery,
        {
            options: {
                variables: {
                    id: props.match.params["id"]
                }
            }
        })(StoryPage)

    return (
        <Wrapped {...props}/>
    )
}

export default StoryPageWithData
