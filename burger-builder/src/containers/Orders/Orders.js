//import { array } from 'prop-types';
import React , { useEffect } from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = (props) => {

    const { onFetchOrders } = props;

    useEffect(() => {
        onFetchOrders(props.token, props.userId);
    }, [onFetchOrders]);
    
    let orders = <Spinner />;
    if(!props.loading) {
        orders = props.orders.map(order => {
            return <Order 
            key={order.id}
            ingrediants={order.ingrediants}
            price={order.price} />;
        })
    };

    return (
        <div>
            {orders}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrder(token, userId))
    }
}

export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(Orders), axios);