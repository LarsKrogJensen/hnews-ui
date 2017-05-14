import * as React from 'react'
import {Route, Redirect, Switch} from "react-router-dom"
import StoryPage from "../pages/StoryPage"
import {RouteComponentProps, withRouter} from "react-router"
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup"
import {
    TopFeedPage,
    NewFeedPage,
    BestFeedPage,
    ShowFeedPage,
    AskFeedPage,
    JobFeedPage
} from "../pages/FeedPages"

interface IAppBodyProps {
}

class AppBody extends React.Component<IAppBodyProps & RouteComponentProps<any>, {}> {

    public render() {
        const location = this.props.location
        const path = location.pathname
        console.log("Animate key: " + path)
        return (
            <div className="app-content">
                <CSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeave={false}
                    transitionName="slide">
                    <Switch key={path} location={location}>
                        <Redirect exact path="/" to="/top"/>
                        <Route key="1" path="/top" component={TopFeedPage}/>
                        <Route key="2" path="/best" component={BestFeedPage}/>
                        <Route key="3" path="/new" component={NewFeedPage}/>
                        <Route key="4" path="/show" component={ShowFeedPage}/>
                        <Route key="5" path="/ask" component={AskFeedPage}/>
                        <Route key="6" path="/job" component={JobFeedPage}/>
                        <Route key="7" path="/story/:id" component={StoryPage}/>
                    </Switch>
                </CSSTransitionGroup>
            </div>
        )
    }
}

const AppBodyWithRouter = withRouter(AppBody)
export default AppBodyWithRouter

