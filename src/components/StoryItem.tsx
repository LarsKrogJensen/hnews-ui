import * as React from "react"
import {Story} from "../api/typings"
import "./StoryItem.less"
import {NavLink} from "react-router-dom"
import {Icon} from "semantic-ui-react"


interface IStoryItemProps {
    story: Story
}

export default class StoryItem extends React.Component<IStoryItemProps, {}> {
    public render() {
        const story = this.props.story;
        return (
            <div className="story">
                <div className="score">
                    {story.score}
                </div>
                <div className="content">
                    <div className="title">{story.title}</div>
                    <div className="footer">
                        <div className="user">by <NavLink to={`/user/${story.by.id}`}>{story.by.id}</NavLink></div>
                        <div className="comment">
                            <NavLink to={`/story/${story.id}`}>
                                <Icon name="comments" />{story.descendants} comments
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
