import {
 createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from '../modules/reducers';

let store = null;

const reducers = combineReducers(reducer);

const clientStore = (initialState) => {
  // eslint-disable-next-line
  const { persistStore, persistReducer } = require('redux-persist');
  const blackListPropTransform = createTransform(
    inState => ({
      ...inState,
      error: undefined,
      loading: false,
      routes: [],
    }),
    outState => ({ ...outState }),
  );
  //  Storage config
  const config = {
    key: 'appbase_movies_store',
    whitelist: ['user', 'checkout'],
    transforms: [blackListPropTransform],
    storage, // default storage is local storage
  };
  const persistedReducer = persistReducer(config, reducers);
  const storeP = createStore(
    persistedReducer,
    initialState,
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(compose(applyMiddleware(...[logger, thunkMiddleware])))
      : compose(applyMiddleware(...[thunkMiddleware])),
  );
  const persistor = persistStore(storeP);
  return { store: storeP, persistor };
};

export const initStore = (isServer, initialState) => {
  if (isServer && typeof window === 'undefined') {
    // Server
    return {
      store: createStore(reducers, initialState, compose(applyMiddleware(thunkMiddleware))),
    };
  }
  if (!store) {
    // Client
    store = clientStore(initialState);
  }

  return store;
};

export default initStore;
