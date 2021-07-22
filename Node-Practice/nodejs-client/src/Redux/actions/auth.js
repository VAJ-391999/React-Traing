import * as actiontype from  './actionType';

export const isAuth = (authPayload) => {
    return {
        type : actiontype.IS_AUTH,
        authPayload : authPayload
    }
}

export const currentUser = (userPayload) => {
    return {
        type: actiontype.SET_CURRENT_USER,
        userPayload: userPayload
    }
}