//import React from 'react;'
import * as actionType from '../actions/actionType';
import { updateOject } from '../../shared/utility';

const initstate = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}



const reducer = (state = initstate, action) => {
    switch(action.type) {
        case actionType.AUTH_START:
            return updateOject(state, {error: null, loading: true});
        case actionType.AUTH_SUCCESS:
            return updateOject(state, {token: action.idToken, userId: action.userId, error: null, loading: false});
        case actionType.AUTH_FAIL:
            return updateOject(state, {error:action.error, loading: false});
        case actionType.AUTH_LOGOUT:
            return updateOject(state, {token: null, userId: null})
        case actionType.SET_AUTH_REDIRECT_PATH:
            return updateOject(state, {authRedirectPath: action.path})
        default:
            return state;
    }
};

export default reducer;