import * as actiontype from './actionstypes';

export const IncrementCounter = () => {
   return {
    type: actiontype.INCREMENT_COUNTER
   } 
}

export const DecrementCounter = () => {
    return {
        type: actiontype.DECREMENT_COUNTER
    }
}