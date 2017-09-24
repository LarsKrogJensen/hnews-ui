import * as React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import StoryPage from "../pages/StoryPage"
import {RouteComponentProps, withRouter} from "react-router"
// import {TransitionGroup} from "react-transition-group"
import {AskFeedPage, BestFeedPage, JobFeedPage, NewFeedPage, ShowFeedPage, TopFeedPage} from "../pages/FeedPages"
import TimePage from "../pages/TimePage"
// import TransitionGroup from "react-transition-group/TransitionGroup"

interface IAppBodyProps {
}

class AppBody extends React.Component<IAppBodyProps & RouteComponentProps<any>, {}> {

    public render() {
        const location = this.props.location
        const path = location.pathname
        console.log("Animate key: " + path)
        return (
            <div className="app-content">
                {/*<TransitionGroup*/}
                    {/*appear={true}*/}
                    {/*timeout={{ enter: 500, exit: 300 }}*/}
                    {/*leave={false}*/}
                    {/*classNames="slide">*/}
                    <Switch key={path} location={location}>
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
                {/*</TransitionGroup>*/}
            </div>
        )
    }
}

const AppBodyWithRouter: React.ComponentClass<IAppBodyProps> = withRouter(AppBody)
export default AppBodyWithRouter

