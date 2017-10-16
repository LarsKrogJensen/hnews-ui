import * as React from "react"
import {Redirect, Route} from "react-router-dom"
import StoryPage from "../pages/StoryPage"
import {RouteComponentProps, Switch, withRouter} from "react-router"
import {AskFeedPage, BestFeedPage, JobFeedPage, NewFeedPage, ShowFeedPage, TopFeedPage} from "../pages/FeedPages"
import TimePage from "../pages/TimePage"
import {CSSTransition, TransitionGroup} from "react-transition-group"


interface IAppBodyProps {
}

class AppBody extends React.Component<IAppBodyProps & RouteComponentProps<any>, {}> {

    public render() {
        const location = this.props.location
        const path = location.pathname
        console.log("Animate key: " + path)
        return (
            <div className="app-content">

                <TransitionGroup>
                    <CSSTransition key={path}
                                   classNames='fade'
                                   exit={false}
                                   timeout={200}>
                        <Switch>
                            <Redirect exact path="/" to="/top"/>
                            <Route path="/top" component={TopFeedPage}/>
                            <Route path="/best" component={BestFeedPage}/>
                            <Route path="/new" component={NewFeedPage}/>
                            <Route path="/show" component={ShowFeedPage}/>
                            <Route path="/ask" component={AskFeedPage}/>
                            <Route path="/job" component={JobFeedPage}/>
                            <Route path="/story/:id" component={StoryPage}/>
                            <Route path="/time" component={TimePage}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>

            </div>
        )
    }
}

const AppBodyWithRouter: React.ComponentClass<IAppBodyProps> = withRouter(AppBody)
export default AppBodyWithRouter

