import React, { useEffect } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from '../ContactData/ContactData';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


const Checkout = (props) =>  {

    const checkoutCancelledHnadler = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data');
    }

    let summary = <Redirect to="/" />

    if (props.ings) {
        const purchasedRedirect = props.purchased ? <Redirect to="/" />  : null;
        summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary 
                    ingrediants={props.ings}
                    checkoutCancelled={checkoutCancelledHnadler}
                    checkoutContinued={checkoutContinuedHandler}
                />
                <Route path={props.match.path + '/contact-data'} component={ContactData}/>
            </div>
        )
    }

    return summary;
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingrediants,
        purchased : state.order.purchased
    };
};



export default connect(mapStateToProps)(Checkout);