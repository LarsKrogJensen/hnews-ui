import * as React from 'react'
import {Menu, Input} from 'semantic-ui-react'
import {RouteComponentProps} from "react-router"


const logo = require("../assets/logo.svg")
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
        const { location } = this.props
        console.log("Path: " + location.pathname);

        return (
            <div style={{padding: 16}}>
                <Menu pointing>
                    <Menu.Item name='top' active={location.pathname === '/top'} onClick={this.handleItemClick}/>
                    <Menu.Item name='best' active={location.pathname === '/best'} onClick={this.handleItemClick}/>
                    <Menu.Item name='ask' active={location.pathname === '/ask'} onClick={this.handleItemClick}/>
                    <Menu.Item name='jobs' active={location.pathname === '/jobs'} onClick={this.handleItemClick}/>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...'/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>

        )
    }

    private handleItemClick = (e, { name }) => {
        this.props.history.push(`/${name}`)
    }

    
}

// const AppHeaderWithRouter: React.ComponentClass<IAppHeaderProps> = withRouter(AppHeader)

export default AppHeader
