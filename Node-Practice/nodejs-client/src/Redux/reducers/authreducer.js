import * as actiontype from '../actions/actionType';

const initialState = {
    isAuthentication: false,
    currentUserName: null
}

const authreducer = (state=initialState, action) => {
    switch(action.type) {
        case actiontype.IS_AUTH:
            return {...state, isAuthentication: action.authPayload};

        case actiontype.SET_CURRENT_USER:
            return {...state, currentUserName: action.userPayload};

        default:
            return state;
    }
}

export default authreducer;