import * as React from 'react'
import {Menu} from 'semantic-ui-react'
import {RouteComponentProps, withRouter} from "react-router"
import SearchInput from "../pages/SearchView"
const logo = require("../assets/logo.png")

interface IAppHeaderProps {
}

class AppHeader extends React.Component<IAppHeaderProps & RouteComponentProps<any>, {}> {

    public render() {
        const location = this.props.location

        return (
            <div className="app-header">
                <img className="app-logo" src={logo} alt="logo" />
                <Menu pointing secondary inverted borderless className="app-menu">
                    <Menu.Item name='top' active={location.pathname === '/top'} onClick={this.handleItemClick}/>
                    <Menu.Item name='best' active={location.pathname === '/best'} onClick={this.handleItemClick}/>
                    <Menu.Item name='new' active={location.pathname === '/new'} onClick={this.handleItemClick}/>
                    <Menu.Item name='show' active={location.pathname === '/show'} onClick={this.handleItemClick}/>
                    <Menu.Item name='ask' active={location.pathname === '/ask'} onClick={this.handleItemClick}/>
                    <Menu.Item name='job' active={location.pathname === '/job'} onClick={this.handleItemClick}/>
                </Menu>
                <SearchInput />
            </div>
        )
    }

    private handleItemClick = (e, {name}) => {
        this.props.history.push(`/${name}`)
    }

}

const AppHeaderWithRouter = withRouter(AppHeader)

export default AppHeaderWithRouter
