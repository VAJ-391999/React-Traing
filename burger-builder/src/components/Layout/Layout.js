import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

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
                <ToolBar drawerToggleClicked={this.slideDrawerToggleClicked} isAuth={this.props.isAuthenticated}/>
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
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

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};


export default connect(mapStateToProps)(Layout);