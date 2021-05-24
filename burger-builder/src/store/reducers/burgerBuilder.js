import * as actionType from '../actions/actionType';
import { updateOject } from '../../shared/utility';

const INGREDIANT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const initialState = {
    ingrediants: null,
    totalPrice: 4,
    error: false,
    building: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIANT:
            const updatedIngrediant = {[action.ingrediantName]: state.ingrediants[action.ingrediantName] + 1}
            const updateIngrediants = updateOject(state.ingrediants, updatedIngrediant);
            const updatedState = {
                ingrediants: updateIngrediants,
                totalPrice: state.totalPrice + INGREDIANT_PRICE[action.ingrediantName],
                building: true
            }
            return updateOject(state, updatedState);

        case actionType.REMOVE_INGREDIANT:
            const updatedIng = {[action.ingrediantName]: state.ingrediants[action.ingrediantName] - 1}
            const updateIngs = updateOject(state.ingrediants, updatedIng);
            const updatedSt = {
                ingrediants: updateIngs,
                totalPrice: state.totalPrice + INGREDIANT_PRICE[action.ingrediantName],
                building: true
            }
            return updateOject(state, updatedSt);

        case actionType.SET_INGREDIANTS:
            return updateOject(state, {
                ingrediants: {
                    salad: action.ingrediants.salad,
                    bacon: action.ingrediants.bacon,
                    cheese: action.ingrediants.cheese,
                    meat: action.ingrediants.meat
                },
                totalPrice: 4,
                error: false,
                building: false
            });
           
        case actionType.FATCH_INGREDIANS_FAILED:
            return updateOject(state, { error : true });
        default:
            return state;
    }
};

export default reducer;