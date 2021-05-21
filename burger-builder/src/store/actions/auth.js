import * as actiontypes from '../../store/actions/actionType';
import axios from '../../axios-orders';


export const authStatrt = () => {
    return {
        type: actiontypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actiontypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actiontypes.AUTH_FAIL,
        error: error
    };
};


export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 10)
    }
} 

export const logout = () => {
    return {
        type: actiontypes.AUTH_LOGOUT
    }
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStatrt());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDoVwUuQaVJTvVyp8zIYXd--6P0hafhjg0';

        if(!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDoVwUuQaVJTvVyp8zIYXd--6P0hafhjg0';
        }
        axios.post(url, authData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail(err.response.data.error));
        })
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actiontypes.SET_AUTH_REDIRECT_PATH,
        path : path
    }
}