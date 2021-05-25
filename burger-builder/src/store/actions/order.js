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
    return {
        type: actionType.PURCHASE_BURGER,
        orderData: orderData,
        token: token
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

export const fetchOrder = (token, userId) => {
    return {
        type: actionType.FATCH_ORDERS,
        token: token,
        userId: userId
    };
};