import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIANT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingrediants: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState (ingrediants) {
        
        const sum = Object.keys(ingrediants).map(igkey => {
            return ingrediants[igkey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchaseable: sum > 0});
    }

    addIngrediantHandler = (type) => {
        const oldCount = this.state.ingrediants[type];
        const updatedCount = oldCount + 1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        }
        updatedIngrediants[type] = updatedCount;
        const priceAddition = INGREDIANT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingrediants: updatedIngrediants});
        this.updatePurchaseState(updatedIngrediants);
    }

    removeIngredianHandler = (type) => {
        const lastcount = this.state.ingrediants[type];
        if (lastcount <= 0) {
            return;
        }
        const removeCount = lastcount - 1;
        const updateIngrediantAfterRemover = {
            ...this.state.ingrediants
        }
        updateIngrediantAfterRemover[type] = removeCount;
        const priceRemove = INGREDIANT_PRICE[type];
        const lastPrice = this.state.totalPrice;
        const updatePrice = lastPrice - priceRemove;
        this.setState({totalPrice: updatePrice, ingrediants: updateIngrediantAfterRemover});
        this.updatePurchaseState(updateIngrediantAfterRemover);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancleHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('continue?');
      }

    render () {
    const disabledInfo = {
        ...this.state.ingrediants
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    //for{salad: ture, meat: flase}
        return (
            <Aux>
                <Model show={this.state.purchasing} modelClosed={this.purchaseCancleHandler}>
                    <OrderSummary 
                    ingrediants={this.state.ingrediants}
                    price={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}/>
                </Model>
                <Burger ingrediants={this.state.ingrediants} />
                <BuildControls 
                ingrediantAdded = {this.addIngrediantHandler} 
                ingrediantRemoved = {this.removeIngredianHandler}
                disabled = { disabledInfo}
                purchaseable={this.state.purchaseable}
                price = {this.state.totalPrice}
                ordered={this.purchaseHandler} />

            </Aux>
            
        );
    }
}

export default BurgerBuilder;