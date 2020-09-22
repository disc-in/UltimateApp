import { combineReducers } from 'redux';

import favoriteReducer from './favoriteReducer';
import programReducer from './programReducer';
import animationReducer from './animationReducer';

const rootReducer = combineReducers({
  favoriteDrills: favoriteReducer,
  completeTrainings: programReducer,
  customeAnimations: animationReducer,
  drills: (state = [], action) => state,
  trainings: (state = [], action) => state,
  programs: (state = [], action) => state,
  theory: (state = [], action) => state,
});

export default rootReducer;
