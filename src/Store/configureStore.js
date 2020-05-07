import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';

import rootReducer from './Reducers';
import fixtures from '../Fixtures';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['completeTrainings', 'favoriteDrills'],
  blacklist: ['drills', 'trainings', 'programs'],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  fixtures,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(createLogger()),
);
// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
