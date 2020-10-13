const initialState = [];

function drillReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'SAVE_DRILL':
      // If the drill is already saved, replace it; otherwise add it
      const drillIndex = state.findIndex((item) => item.title === action.value.title);

      if (drillIndex !== -1) {
        nextState = [...state];
        nextState[drillIndex] = action.value;
      } else {
        nextState = [...state, action.value];
      }

      return nextState;

    case 'RENAME_DRILL':
      nextState = [...state];

      const index = state.findIndex((item) => item.title === action.value.oldTitle);
      if (index !== -1) {
        nextState[index].title = action.value.newTitle;
      }
      return nextState;

    case 'DELETE_DRILL':
      return state.filter((item) => item.title !== action.value);

    default:
      return state;
  }
}

export default drillReducer;
