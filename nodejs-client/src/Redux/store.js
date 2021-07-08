import { createStore, compose} from 'redux';
import rootReducer from './rootReducer';
import  { persistStore } from 'redux-persist'

const composeEnhancers = process.env.NODE_ENV === 'development' ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


export const store = createStore(rootReducer, composeEnhancers());
export const persistor = persistStore(store);

export default {store, persistor};