import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../ContactData/ContactData';

class Checkout extends Component {
    state ={
        ingrediants: null,
        totalPrice: 0
    }

    componentWillMount() {
        console.log('check out' + this.props)
        const query = new URLSearchParams(this.props.location.search);
        const ingrediants = {};
        let price = 0;
        for (let param of query.entries()) {
            //['salad','1']
            if (param[0] === 'price'){
                price = param[1];
            }
            else {
                ingrediants[param[0]] = +param[1];
            }
            
        }
        this.setState({ingrediants: ingrediants, totalPrice: price});
    }

    checkoutCancelledHnadler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingrediants={this.state.ingrediants}
                    checkoutCancelled={this.checkoutCancelledHnadler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData ingrediants={this.state.ingrediants} price={this.state.totalPrice} {...props} />)}/>
            </div>
        );
    }
}

export default
 Checkout;