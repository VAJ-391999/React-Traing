//import { array } from 'prop-types';
import React , { Component } from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
   /* state = {
        orders: [],
        loading: true
    }*/

    componentDidMount() {
        this.props.onFetchOrders(this.props.token);
        /*axios.get('/orders.json')
        .then(res => {
            console.log('Order');
            console.log(res.data);
            let fetchOrders = [];

            for (let key in res.data) {
                fetchOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            console.log(fetchOrders );
            this.setState({loading: false, orders: fetchOrders});
            console.log(this.state.orders);
        })
        .catch(err => {
            this.setState({loading: false});
        });*/
    }

    render() {
        let orders = <Spinner />;
        if(!this.props.loading) {
            orders = this.props.orders.map(order => {
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
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrder(token))
    }
}

export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(Orders), axios);