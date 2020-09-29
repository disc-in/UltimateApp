const initialState = [];

function favoriteReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteDrillIndex = state.findIndex((item) => item.id === action.value.id);
      if (favoriteDrillIndex !== -1) {
        nextState = state.filter((item, index) => index !== favoriteDrillIndex);
      } else {
        nextState = [...state, action.value];
      }
      return nextState || state;
    default:
      return state;
  }
}

export default favoriteReducer;
