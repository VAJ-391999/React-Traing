import * as actionType from './actionType';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionType.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionType.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseBurgerStart = () => {
   return {
    type: actionType.PURCHASE_BURGER_START
   };
};

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());

        axios.post('/orders.json?auth=' + token, orderData)
        .then(response => {
           console.log(response.data);
           dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        })
        .catch(error => {
            dispatch(purchaseBurgerFail(error));
        });
        //console.log(this.props.ingrediants);
    };
};

export const purchaseInit = () => {
    return {
        type: actionType.PURCHASE_INIT
    };
};

export const fetchOrderSuccess = (orders) => {
    return {
        type: actionType.FATCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrderFail = (error) => {
    return {
        type: actionType.FATCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrderStart = () => {
    return {
        type: actionType.FATCH_ORDERS_START
    };
};

export const fetchOrder = (token) => {
    return dispatch => {
        dispatch(fetchOrderStart());
        axios.get('/orders.json?auth=' + token)
        .then(res => {
            console.log('Order');
            console.log(res.data);
            const fetchOrders = [];

            for (let key in res.data) {
                fetchOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchOrderSuccess(fetchOrders));
        })
        .catch(err => {
            dispatch(fetchOrderFail(err));
        });
    };
};