import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';

import rootReducer from './Reducers';
import fixtures from '../Fixtures';

const migrations = {
  1: (state) => {
    // migration to rename customDrills to customPlays modifying the structure
    const customPlays = state.customDrills?.map((drill) => {
      return {
        animation: drill.drill,
        title: drill.title,
      };
    });
    return {
      ...state,
      customPlays,
      customDrills: [],
    };
  },
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['completeTrainings', 'favoriteDrills', 'customPlays', 'customDrills'],
  blacklist: ['drills', 'trainings', 'programs', 'theory'],
  migrate: createMigrate(migrations, { debug: false }),
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, fixtures);
// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
