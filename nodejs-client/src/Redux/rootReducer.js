import authreducer from './reducers/authreducer';
import { persistReducer } from 'redux-persist';
import { combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authreducer
  });

export default persistReducer(persistConfig, rootReducer);