import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    slideDrawerToggleClicked = () => {
        this.setState((prevstate) => {
            return {showSideDrawer: !prevstate.showSideDrawer};
        });
    }

    render () {
        return (
            <Aux>
                <ToolBar drawerToggleClicked={this.slideDrawerToggleClicked}/>
                <SideDrawer 
                    opend={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}
                    />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );

    }
}


export default Layout;