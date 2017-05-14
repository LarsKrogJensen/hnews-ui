import * as React from 'react'
import {Menu, Input, Search} from 'semantic-ui-react'
import {RouteComponentProps, withRouter} from "react-router"


const logo = require("../assets/logo.png")
interface IAppHeaderProps extends RouteComponentProps<any> {

}

interface IAppHeaderState {

}

class AppHeader extends React.Component<IAppHeaderProps, IAppHeaderState> {

    constructor(props: IAppHeaderProps, context: any) {
        super(props, context)
        this.state = {
            activeItem: "home"
        }
    }

    public render() {
        const {location} = this.props
        console.log("Path: " + location.pathname)

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
                <Search inverted icon='search' placeholder='Search...' className="app-search"/>
            </div>
        )
    }

    private handleItemClick = (e, {name}) => {
        this.props.history.push(`/${name}`)
    }

}

const AppHeaderWithRouter: React.ComponentClass<IAppHeaderProps> = withRouter(AppHeader)
export default AppHeaderWithRouter

// export default AppHeader
