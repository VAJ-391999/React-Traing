import * as actionType from './actions';

const initialState = {
    ingrediants: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    },
    totalPrice: 4,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIANT:
            return {
                ...state,
                ingrediants: {
                    ...state.ingrediants,
                    [action.ingrediantName]: state.ingrediants[action.ingrediantName] + 1
                }
            };
        case actionType.REMOVE_INGREDIANT:
            return {
               ...state,
               ingrediants: {
                   ...state.ingrediants,
                   [action.ingrediantName]: state.inrediants[action.ingrediantName] - 1
               } 
            };
        default:
            return state;
    }
};

export default reducer;