import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';

import rootReducer from './Reducers';
import fixtures from '../Fixtures';
import { generateUuid } from '../utils/uuid';

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
      customDrills: undefined,
    };
  },
  2: (state) => {
    // migration to add a uuid to existing customPlays
    const customPlays = state.customPlays?.map((play) => {
      return {
        ...play,
        uuid: generateUuid(),
      };
    });
    return {
      ...state,
      customPlays,
    };
  },
  3: (state) => {
    // migration to remove trainings
    delete state['trainings'];
    console.log('\n\nSTORE\n\n');
    console.log(Object.keys(state));
    return state;
  },
};

const persistConfig = {
  key: 'root',
  version: 3,
  storage: AsyncStorage,
  whitelist: ['completeTrainings', 'favoriteDrills', 'customPlays'],
  blacklist: ['drills', 'programs', 'theory'],
  migrate: createMigrate(migrations, { debug: true }),
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, fixtures);
// Middleware: Redux Persist Persister
const persistor = persistStore(store);

// Exports
export { store, persistor };
