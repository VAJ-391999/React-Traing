import * as actionstypes from '../action/actionstypes';

const initialValue = {
    value: 0
}

const counterReducer = ((state=initialValue, action: any) => {
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            return {...state, value: state.value + 1}
        case 'DECREMENT_COUNTER':
            return {...state, value: state.value - 1}
        default:
            return state;
    }
})

export default counterReducer;