import * as React from "react"
import {Menu} from "semantic-ui-react"
import {RouteComponentProps, withRouter} from "react-router"
import SearchInput from "../pages/SearchView"
const logo = require("../assets/logo.png")

interface IAppHeaderProps {
}

class AppHeader extends React.Component<IAppHeaderProps & RouteComponentProps<any>, {}> {
    private menuItems = ["top", "best", "new", "show", "ask", "job", "time"]

    public render() {
        const location = this.props.location

        return (
            <div className="app-header">
                <img className="app-logo" src={logo} alt="logo"/>
                <Menu pointing secondary inverted borderless className="app-menu">
                    {this.menuItems.map(menuItem => {
                        return <Menu.Item key={menuItem}
                                          name={menuItem}
                                          active={location.pathname === `/${menuItem}`}
                                          onClick={this.handleItemClick}/>
                    })}

                </Menu>
                <SearchInput onSelect={this.handleSearchClick}/>
            </div>
        )
    }

    private handleItemClick = (e, {name}) => {
        this.props.history.push(`/${name}`)
    }

    private handleSearchClick = (id: string) => {
        this.props.history.push(`/story/${id}`)
    }

}

const AppHeaderWithRouter = withRouter(AppHeader)

export default AppHeaderWithRouter
