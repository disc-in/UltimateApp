const initialState = { favoriteDrills: [] };

function favoriteReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteDrillIndex = state.favoriteDrills.findIndex(item => item.id === action.value.id);
      if (favoriteDrillIndex !== -1) {
        nextState = {
          ...state,
          favoriteDrills: state.favoriteDrills.filter((item, index) => index !== favoriteDrillIndex),
        };
      } else {
        nextState = {
          ...state,
          favoriteDrills: [...state.favoriteDrills, action.value],
        };
      }
      return nextState || state;
    default:
      return state;
  }
}

export default favoriteReducer;
