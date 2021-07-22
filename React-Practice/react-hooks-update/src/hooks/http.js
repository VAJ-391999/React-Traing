

import { useReducer, useCallback } from 'react';

const initState = {loading: false,
                     error: null, 
                     data: null,
                     extra: null,
                     identifier: null}

const httpReducer = (curhttpState, action) => {
    switch(action.type) {
      case 'SEND':
        return {loading: true, error: null, data: null, extra: null, identifier: action.identifier}
      case 'RESPONSE':
        return {...curhttpState, loading: false, data: action.responseData, extra: action.extra}
      case 'ERROR':
        return {loading: false, error: action.errorMessage}
    case 'CLEAR':
        return initState
      default:
        throw new Error('should not get there');
    };
  };

const useHttp = () => {
    const[httpState, dispatchHttp] = useReducer(httpReducer, initState);

    const clear = useCallback(() => dispatchHttp({type: 'CLEAR'}), []);

    const sendRequest = useCallback( (url, method, body, reqExtra, reqIndentifier) => {
        dispatchHttp({type: 'SEND', identifier: reqIndentifier});
        fetch(url , {
        method: method,
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
        
        }).then(response => {
            return response.json();
       
        })
        .then(responseData => {
            dispatchHttp({type: 'RESPONSE',responseData: responseData, extra: reqExtra });
        })
        .catch = (error) => {
        dispatchHttp({type: 'ERROR', errorMessage: 'somthig went wrong!!'});
        };
    }, []);

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        reqExtra: httpState.extra,
        reqIndentifier: httpState.identifier,
        clear: clear
    };
};

export default useHttp;