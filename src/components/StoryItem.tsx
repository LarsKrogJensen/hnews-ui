import * as React from "react"
import {Story} from "../api/typings"
import "./StoryItem.less"
import {NavLink} from "react-router-dom"
import {Icon} from "semantic-ui-react"
import moment = require("moment")


interface IStoryItemProps {
    story: Story
}

export default class StoryItem extends React.Component<IStoryItemProps, {}> {
    public render() {
        const story = this.props.story
        return (
            <div className="story">
                <div className="story-score">
                    {story.score}
                </div>
                <div className="story-content">
                    <a className="story-title" href={story.url || ""} target="_blank">{story.title}</a>
                    <div className="story-footer">
                        <div className="story-user">
                            by <NavLink to={`/user/${story.by.id}`}>{story.by.id}</NavLink>
                        </div>
                        <div className="story-time">{moment(story.time * 1000).fromNow()}</div>
                        <div className="story-comment">
                            <NavLink to={`/story/${story.id}`}>
                                <Icon name="comments"/>{story.descendants} comments
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
