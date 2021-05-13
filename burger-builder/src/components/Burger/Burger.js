import React from 'react';
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';
import './Burger.css';

const burger =(props) => {
    const transformedIngrediants = Object.keys(props.ingrediants).map(igKey => {
        return [...Array(props.ingrediants[igKey])].map((_, i) => {
            return <BurgerIngrediant Key={igKey + i}  type={igKey} />
        }); //[]
    });

    return (
        <div className="Burger">
            <BurgerIngrediant type="bread-top" />
            {transformedIngrediants}
            <BurgerIngrediant type="bread-bottom" />
        </div>
    );
};

export default burger;