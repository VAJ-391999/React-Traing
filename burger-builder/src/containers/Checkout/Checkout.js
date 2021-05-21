import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from '../ContactData/ContactData';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class Checkout extends Component {

    componentWillMount () {
        //this.props.onInitPurchase();
        console.log("CheckOut" + this.props.ings);
    }

    /*  state ={
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
    }*/

    checkoutCancelledHnadler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {

        let summary = <Redirect to="/" />

        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" />  : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingrediants={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHnadler}
                        checkoutContinued={this.checkoutContinuedHandler}
                    />
                    <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
                </div>
            )
        }

        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingrediants,
        purchased : state.order.purchased
    };
};



export default connect(mapStateToProps)(Checkout);