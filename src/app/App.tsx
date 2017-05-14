import * as React from 'react'
import AppHeader from "./AppHeader"
import AppBody from "./AppBody"

export default class App extends React.Component<{}, {}> {

    public render() {
        return (
            <div className="app">
                <AppHeader />
                <AppBody/>
            </div>
        )
    }
}

