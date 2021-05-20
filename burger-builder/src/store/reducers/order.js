import  * as actionTypes from '../actions/actionType';
import { updateOject } from './utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return updateOject(state, { purchased: false});

        case actionTypes.PURCHASE_BURGER_START:
            return updateOject(state, {loading: true});

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = updateOject(action.orderData, {id: action.orderId});
            return updateOject(state, {
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder) //concat return new arrary
            });
                
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateOject(state, {loading: false});
                
        case actionTypes.FATCH_ORDERS_START:
            return updateOject(state, {loading: true});
               
        case actionTypes.FATCH_ORDERS_SUCCESS:
            return updateOject(state, {
                orders: action.orders,
                loading: false
            });
               
        case actionTypes.FATCH_ORDERS_FAIL:
            return updateOject(state, {loading: false});
               
        default:
            return state;
    }
};

export default reducer;