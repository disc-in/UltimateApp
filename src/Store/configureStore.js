import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from './Reducers';
import fixtures from '../Fixtures';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['completeTrainings', 'favoriteDrills'],
  blacklist: ['drills', 'trainings', 'programs', 'fitnessPrograms', 'theory'],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancers = [applyMiddleware(createLogger())];
const composedEnhancers = composeWithDevTools(...enhancers);

// Redux: Store
const store = createStore(persistedReducer, fixtures, composedEnhancers);
// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
