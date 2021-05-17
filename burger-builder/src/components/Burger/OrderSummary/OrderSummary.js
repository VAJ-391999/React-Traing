import React from 'react';
import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';
/*
const orderSummary = (props) => {
    const ingrediantsSummary = Object.keys(props.ingrediants).map(igkey => {
        return (
            <li key={igkey}>
                <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingrediants[igkey]}
            </li>
        );
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the follwing ingrediants:</p>
            <ul>
                {ingrediantsSummary}
            </ul>
            <p>Continue out checkout?</p>
        </Aux>
    );
};*/


class OrderSummary extends React.Component {
    
    render () {
      const ingredientSummary = Object.keys(this.props.ingrediants)
          .map(igKey => {
            return (
            <li key={igKey}>
              <span style={{textTransform: 'capitalize'}}>
                {igKey}
              </span>:{this.props.ingrediants[igKey]}
            </li>
          );
        });
      return (
        <Aux>
          <h3>Your Order</h3>
          <p>A delicious burger with the following ingredients:</p>
          <ul>
            {ingredientSummary}
          </ul>
          <p><strong>Total Price: £{this.props.price}</strong></p>
          <p>Continue to checkout</p>
          <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
          <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
  
      );
    }
  }

export default OrderSummary;