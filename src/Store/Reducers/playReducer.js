const initialState = [];

function playReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'SAVE_PLAY':
      // If the play is already saved, replace it; otherwise add it
      const playIndex = state.findIndex((item) => item.uuid === action.value.uuid);

      if (playIndex !== -1) {
        nextState = [...state];
        nextState[playIndex] = action.value;
      } else {
        nextState = [...state, action.value];
      }

      return nextState;

    case 'RENAME_PLAY':
      nextState = [...state];

      const index = state.findIndex((item) => item.uuid === action.value.uuid);
      if (index !== -1) {
        nextState[index].title = action.value.newTitle;
      }
      return nextState;

    case 'DELETE_PLAY':
      return state.filter((item) => item.uuid !== action.value);

    default:
      return state;
  }
}

export default playReducer;
