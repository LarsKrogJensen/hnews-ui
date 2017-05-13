import * as React from 'react'
import {Route} from "react-router-dom"
import {Redirect, Switch} from "react-router"
import AppHeader from "./AppHeader"
import {TopFeedPage, NewFeedPage, BestFeedPage} from "../pages/FeedPage"
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
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/top"/>
                    )}/>
                    <Route path="/top" component={TopFeedPage}/>
                    <Route path="/best" component={BestFeedPage}/>
                    <Route path="/new" component={NewFeedPage}/>
                    <Route path="/story/:id" component={StoryPage}/>
                </Switch>
            </div>
        )
    }
}
