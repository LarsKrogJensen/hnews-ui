import * as React from 'react'
import {Route, Redirect, Switch} from "react-router-dom"
import AppHeader from "./AppHeader"
import {TopFeedPage, NewFeedPage, BestFeedPage, ShowFeedPage, AskFeedPage, JobFeedPage} from "../pages/FeedPages"
import StoryPage from "../pages/StoryPage"

interface IAppProps {
    // intenionally left empty
}

export class App extends React.Component<IAppProps, any> {

    public render() {
        const AppHeaderWithRouter: any = AppHeader
        return (
            <div className="app">
                <AppHeaderWithRouter />
                <div className="app-content">
                    <Switch>
                        <Redirect exact path="/" to="/top"/>
                        <Route path="/top" component={TopFeedPage}/>
                        <Route path="/best" component={BestFeedPage}/>
                        <Route path="/new" component={NewFeedPage}/>
                        <Route path="/show" component={ShowFeedPage}/>
                        <Route path="/ask" component={AskFeedPage}/>
                        <Route path="/job" component={JobFeedPage}/>
                        <Route path="/story/:id" component={StoryPage}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
