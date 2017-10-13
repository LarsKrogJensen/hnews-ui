import * as React from "react"
import {Redirect, Route} from "react-router-dom"
import StoryPage from "../pages/StoryPage"
import {RouteComponentProps, withRouter} from "react-router"
// import {TransitionGroup} from "react-transition-group"
import {AskFeedPage, BestFeedPage, JobFeedPage, NewFeedPage, ShowFeedPage, TopFeedPage} from "../pages/FeedPages"
import TimePage from "../pages/TimePage"
// import TransitionGroup from "react-transition-group/TransitionGroup"
import {AnimatedSwitch} from 'react-router-transition'

// const duration = 300
//
// const defaultStyle = {
//     opacity: 0,
//     transition: `opacity ${duration}ms ease-in-out`,
// }
//
// const transitionStyles = {
//     entered: {opacity: 1},
//     entering: {opacity: 0},
// }

interface IAppBodyProps {
}

class AppBody extends React.Component<IAppBodyProps & RouteComponentProps<any>, {}> {

    public render() {
        const location = this.props.location
        const path = location.pathname
        console.log("Animate key: " + path)
        return (
            <div className="app-content">

                <AnimatedSwitch
                    atEnter={{opacity: 0}}
                    atLeave={{opacity: 0}}
                    atActive={{opacity: 1}}
                    className="switch-wrapper"
                >
                    <Redirect exact path="/" to="/top"/>
                    <Route path="/top" component={TopFeedPage}/>
                    <Route path="/best" component={BestFeedPage}/>
                    <Route path="/new" component={NewFeedPage}/>
                    <Route path="/show" component={ShowFeedPage}/>
                    <Route path="/ask" component={AskFeedPage}/>
                    <Route path="/job" component={JobFeedPage}/>
                    <Route path="/story/:id" component={StoryPage}/>
                    <Route path="/time" component={TimePage}/>
                </AnimatedSwitch>
            </div>
        )
    }
}

const AppBodyWithRouter: React.ComponentClass<IAppBodyProps> = withRouter(AppBody)
export default AppBodyWithRouter

