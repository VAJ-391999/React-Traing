import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
//https://burger-builder-81d1a-default-rtdb.firebaseio.com/ 
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandle from '../../hoc/withErrorHandler/withErrorHandler';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

const INGREDIANT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        //ingrediants: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        console.log('BurgerBuilder' + this.props);
        console.log(this.props.ings);
        //debugger
       /*axios.get('https://burger-builder-81d1a-default-rtdb.firebaseio.com/ingrediants.json')
        .then(response => {
            this.setState({ingrediants: response.data});
        }).catch(error => {
            this.setState({error: error});
        });*/
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
        //alert('continue?');
        
        const queryParam = [];

        for (let i in this.state.ingrediants) {
            queryParam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingrediants[i]));
        }

        queryParam.push('price=' + this.state.totalPrice);

        const queryString = queryParam.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
      }



    render () {
    const disabledInfo = {
        ...this.props.ings
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;

   
    let burger = this.state.error ? <p>Ingrediants can not loaded!</p> : <Spinner />;

    if (this.props.ings) {
        burger = (
            <Aux>
                <Burger ingrediants={this.props.ings} />
                <BuildControls 
                ingrediantAdded = {this.props.onIngrediantAdded} 
                ingrediantRemoved = {this.props.onIngrediantRemoved}
                disabled = { disabledInfo}
                purchaseable={this.state.purchaseable}
                price = {this.state.totalPrice}
                ordered={this.purchaseHandler} />
            </Aux>
            );

            orderSummary = <OrderSummary 
            ingrediants={this.props.ings}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}/>;
    }

    if (this.state.loading) {
        orderSummary = <Spinner />;
    }

    //for{salad: ture, meat: flase}
        return (
            <Aux>
                <Model show={this.state.purchasing} modelClosed={this.purchaseCancleHandler}>
                    {orderSummary}
                </Model>
               {burger} 
            </Aux>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingrediants
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngrediantAdded:  (ingName) => dispatch({type: actionType.ADD_INGREDIANT, ingrediantName: ingName}),
        onIngrediantRemoved:  (ingName) => dispatch({type: actionType.REMOVE_INGREDIANT, ingrediantName: ingName})
    }
}

//export default withRouter(withErrorHandle(BurgerBuilder, axios));
export default withErrorHandle(connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder)), axios);
//export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandle(withRouter(BurgerBuilder), axios));