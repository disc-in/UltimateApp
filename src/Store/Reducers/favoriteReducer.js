const initialState = [];

function favoriteReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteDrillIndex = state.findIndex(item => item.id === action.value.id);

      // If there is a drill with the considered drill id
      if (favoriteDrillIndex !== -1) {
        // Remove it from the state
        nextState = state.filter((item, index) => index !== favoriteDrillIndex);

        // If there is no drill with the id
      } else {
        // Add it to the drill list
        nextState = [...state, action.value];
      }
      return nextState || state;
    default:
      return state;
  }
}

export default favoriteReducer;
