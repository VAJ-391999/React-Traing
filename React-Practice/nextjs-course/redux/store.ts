import { createStore, compose } from 'redux';
import rootReducer from './reducer/rootreducer';
import counterReducer from './reducer/counterReducer';

//const composeEnhancers = process.env.NODE_ENV === 'development' ?  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


export const store = createStore(rootReducer);

