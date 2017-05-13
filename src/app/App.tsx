import * as React from 'react'
import {Route} from "react-router-dom"
import {Redirect, Switch, withRouter} from "react-router"
import AppHeader from "./AppHeader"
import TopPage from "../pages/TopPage"
import BestPage from "../pages/BestStories"
import AskPage from "../pages/AskPage"
import JobPage from "../pages/JobPage"
import StoryPage from "../pages/StoryPage"

interface IAppProps {
    // intenionally left empty
}

export class App extends React.Component<IAppProps, any> {

    public render() {
        const WithRouter2: any = withRouter(AppHeader)
        return (
            <div className="app">
                <WithRouter2 />
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/top"/>
                    )}/>
                    <Route path="/top" component={TopPage}/>
                    <Route path="/best" component={BestPage}/>
                    <Route path="/ask" component={AskPage}/>
                    <Route path="/jobs" component={JobPage}/>
                    <Route path="/story/:id" component={StoryPage}/>
                </Switch>
            </div>
        )
    }
}
