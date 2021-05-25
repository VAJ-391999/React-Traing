import * as actionTypes from '../actions/actionType';
import axios from '../../axios-orders';
import { updateOject } from '../../shared/utility';

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
    return {
        type: actionTypes.INIT_INGREDIANTS
    }
};