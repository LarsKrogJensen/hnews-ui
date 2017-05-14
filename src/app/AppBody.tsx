import * as React from 'react'
import {Route, Redirect, Switch} from "react-router-dom"
import {
    TopFeedPage,
    NewFeedPage,
    BestFeedPage,
    ShowFeedPage,
    AskFeedPage,
    JobFeedPage
} from "../pages/FeedPages"
import StoryPage from "../pages/StoryPage"
import {RouteComponentProps, withRouter} from "react-router"
import * as CSSTransitionGroup from "react-transition-group/CSSTransitionGroup"

interface IAppBodyProps {

}

class AppBody extends React.Component<IAppBodyProps & RouteComponentProps<any>, {}> {

    public render() {
        const location = this.props.location
        const path = location.pathname
        return (
            <div className="app-content">
                <CSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeave={false}
                    transitionName="slide">
                    <Switch key={path}>
                        <Redirect exact path="/" to="/top"/>
                        <Route path="/top" component={TopFeedPage}/>
                        <Route path="/best" component={BestFeedPage}/>
                        <Route path="/new" component={NewFeedPage}/>
                        <Route path="/show" component={ShowFeedPage}/>
                        <Route path="/ask" component={AskFeedPage}/>
                        <Route path="/job" component={JobFeedPage}/>
                        <Route path="/story/:id" component={StoryPage}/>
                    </Switch>
                </CSSTransitionGroup>
            </div>
        )
    }
}

const AppBodyWithRouter = withRouter(AppBody)
export default AppBodyWithRouter

// <RouteTransition
//                    pathname={location.pathname}
//                    atEnter={{opacity: 0}}
//                    atLeave={{opacity: 0}}
//                    atActive={{opacity: 1}}
//                >
// </RouteTransition>
