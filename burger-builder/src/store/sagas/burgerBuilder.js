import axios from '../../axios-orders';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* initIngrediantsSaga(action) {
    try {
    const response = yield axios.get('https://burger-builder-81d1a-default-rtdb.firebaseio.com/ingrediants.json')
    yield put(actions.setIngrediants(response.data));
    }catch(error ){
        yield put(actions.fatchIngrediantsFailed());
    }
}