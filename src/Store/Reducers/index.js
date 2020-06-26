import { combineReducers } from 'redux';

import favoriteReducer from './favoriteReducer';
import programReducer from './programReducer';

const rootReducer = combineReducers({
  favoriteDrills: favoriteReducer,
  completeTrainings: programReducer,
  drills: (state = [], action) => state,
  trainings: (state = [], action) => state,
  programs: (state = [], action) => state,
  fitnessPrograms: (state = [], action) => state,
  theory: (state = [], action) => state,
});

export default rootReducer;
