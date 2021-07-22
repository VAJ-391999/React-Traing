import React from 'react';
import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';

const OrderSummary =(props) => {
    
    const ingredientSummary = Object.keys(props.ingrediants)
        .map(igKey => {
          return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>
              {igKey}
            </span>:{props.ingrediants[igKey]}
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
        <p><strong>Total Price: £{props.price}</strong></p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
      </Aux>

    );
  }

export default OrderSummary;