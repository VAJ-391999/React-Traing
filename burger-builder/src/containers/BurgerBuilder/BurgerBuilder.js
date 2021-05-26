import React, {useState, useEffect, useCallback} from 'react';
import Aux from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'; 
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandle from '../../hoc/withErrorHandler/withErrorHandler';
import { withRouter} from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import * as burgerBuilderAction from '../../store/actions/index';


const BurgerBuilder = (props) => {
    const [purchasing, setPurchasing] = useState(false);

    const dispatch = useDispatch();
    const ings = useSelector(state => {
        return state.burgerBuilder.ingrediants;
    });

    const price = useSelector( state => {
        return state.burgerBuilder.totalPrice;
    });

    const error = useSelector( state => {
        return state.burgerBuilder.error;
    });

    const isAuthenticated = useSelector( state => {
        return state.auth.token !== null;
    });

    const onIngrediantAdded = (ingName) => dispatch(burgerBuilderAction.addIngrediant(ingName));
    const onIngrediantRemoved = (ingName) => dispatch(burgerBuilderAction.removeIngrediant(ingName));
    const onInitIngrediants =  useCallback( () => dispatch(burgerBuilderAction.initIngrediants()), [dispatch]);
    const onInitPurchase = () => dispatch(burgerBuilderAction.purchaseInit());
    const onSetAuthRedirectPath = (path) => dispatch(burgerBuilderAction.setAuthRedirectPath(path));

    useEffect(()=> {
        console.log(ings);
        onInitIngrediants();
    }, [onInitIngrediants]);

    const updatePurchaseState = (ingrediants) => {
        
        const sum = Object.keys(ingrediants).map(igkey => {
            return ingrediants[igkey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        return  sum > 0;
    }

    const purchaseHandler = () => {
        if(isAuthenticated) {
            setPurchasing(true);
        }
        else {
            props.history.push('/auth');
            onSetAuthRedirectPath('/chekout');
        }
        
    }

    const purchaseCancleHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        onInitPurchase();
        props.history.push('./checkout');
      }

    const disabledInfo = {
        ...ings
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;

   
    let burger = error ? <p>Ingrediants can not loaded!</p> : <Spinner />;

    if (ings) {
        burger = (
            <Aux>
                <Burger ingrediants={ings} />
                <BuildControls 
                ingrediantAdded = {onIngrediantAdded} 
                ingrediantRemoved = {onIngrediantRemoved}
                disabled = { disabledInfo}
                purchaseable={updatePurchaseState(ings)}
                price = {price}
                ordered={purchaseHandler}
                isAuth={isAuthenticated} />
            </Aux>
            );

            orderSummary = <OrderSummary 
            ingrediants={ings}
            price={price}
            purchaseCancelled={purchaseCancleHandler}
            purchaseContinued={purchaseContinueHandler}/>;
    }
    return (
        <Aux>
            <Model show={purchasing} modelClosed={purchaseCancleHandler}>
                {orderSummary}
            </Model>
            {burger} 
        </Aux>
        
    );
}

/*
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingrediants,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngrediantAdded:  (ingName) => dispatch(burgerBuilderAction.addIngrediant(ingName)),
        onIngrediantRemoved:  (ingName) => dispatch(burgerBuilderAction.removeIngrediant(ingName)),
        onInitIngrediants: () => dispatch(burgerBuilderAction.initIngrediants()),
        onInitPurchase: () => dispatch(burgerBuilderAction.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(burgerBuilderAction.setAuthRedirectPath(path))

    }
}*/

export default withErrorHandle(withRouter(BurgerBuilder), axios);
//export default withErrorHandle(connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder)), axios);
