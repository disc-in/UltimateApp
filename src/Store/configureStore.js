import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './Reducers';
import fixtures from '../Fixtures';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['completeTrainings', 'favoriteDrills', 'customeAnimations'],
  blacklist: ['drills', 'trainings', 'programs', 'theory'],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, fixtures);
// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
