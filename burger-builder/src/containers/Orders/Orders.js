import { array } from 'prop-types';
import React , { Component } from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
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
        });
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                    return <Order 
                    key={order.id}
                    ingrediants={order.ingrediants}
                    price={order.price} />;
                })}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);