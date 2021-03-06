import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>we hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingrediants={props.ingrediants}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCLE</Button>

            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;