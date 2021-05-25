import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { initIngrediantsSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrderSaga } from './order';
import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionType';

export function* withauth(action) {
    yield takeEvery(actionTypes.AUTH_INITITAVE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}

export function* watchBurgerBuilder(action) {
    yield takeEvery(actionTypes.INIT_INGREDIANTS, initIngrediantsSaga);
}

export function* watchOrder(action) {
    yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
    yield takeEvery(actionTypes.FATCH_ORDERS, fetchOrderSaga);
}