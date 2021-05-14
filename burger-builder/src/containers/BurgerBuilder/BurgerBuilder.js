import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIANT_PRICE = {
    salad: 0.5,
    chees: 0.4,
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
        totalPrice: 4
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
    }

    removeIngredianHandler = (type) => {
        const lastcount = this.state.ingrediants[type];
        const removeCount = lastcount - 1;
        const updateIngrediantAfterRemover = {
            ...this.state.ingrediants
        }
        updateIngrediantAfterRemover[type] = removeCount;
        const priceRemove = INGREDIANT_PRICE[type];
        const lastPrice = this.state.totalPrice;
        const updatePrice = lastPrice - priceRemove;
        this.setState({totalPrice: updatePrice, ingrediants: updateIngrediantAfterRemover});
    }

    render () {
        return (
            <Aux>
                <Burger ingrediants={this.state.ingrediants} />
                <BuildControls 
                ingrediantAdded = {this.addIngrediantHandler} ingrediantRemoved = {this.removeIngredianHandler}/>
            </Aux>
            
        );
    }
}

export default BurgerBuilder;