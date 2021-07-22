import React from 'react';
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';
import './Burger.css';
import { withRouter } from 'react-router-dom';

const burger = (props) => {
    console.log(props);
    let transformedIngrediants = Object.keys(props.ingrediants).map(igKey => {
        return [...Array(props.ingrediants[igKey])].map((_, i) => {
            return <BurgerIngrediant Key={igKey + i}  type={igKey} /> //igkey contains salad,meat,cheese etc........... here i is index if this igkey arrary
        }); //[]
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    console.log(transformedIngrediants);

    if (transformedIngrediants.length === 0) {
        transformedIngrediants = <p>Please start adding ingrediants</p>
    }
    
    return (
        <div className="Burger">
            <BurgerIngrediant type="bread-top" />
            {transformedIngrediants}
            <BurgerIngrediant type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);