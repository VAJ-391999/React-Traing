import * as actionTypes from '../actions/actionType';
import axios from '../../axios-orders';

export const addIngrediant = (name) =>{
    return {
        type: actionTypes.ADD_INGREDIANT,
        ingrediantName: name
    };
};

export const removeIngrediant = (name) =>{
    return {
        type: actionTypes.REMOVE_INGREDIANT,
        ingrediantName: name
    };
};

export const setIngrediants = (ingrediants) => {
    return {
        type: actionTypes.SET_INGREDIANTS,
        ingrediants: ingrediants
    };
};

export const fatchIngrediantsFailed = () => {
    return {
        type: actionTypes.FATCH_INGREDIANS_FAILED, 
    };
};

export const initIngrediants = () => {
    return dispatch => {
        axios.get('https://burger-builder-81d1a-default-rtdb.firebaseio.com/ingrediants.json')
        .then(response => {
            dispatch(setIngrediants(response.data));
        }).catch(error => {
            dispatch(fatchIngrediantsFailed());
        });
    };
};