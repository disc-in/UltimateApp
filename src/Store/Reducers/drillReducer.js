const initialState = [];

function drillReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'SAVE_DRILL':
      nextState = [...state];

      // If the drill is already saved, replace it; otherwise add it
      let drillIndex = nextState.findIndex((item) => item.title === action.value.title);
      if (drillIndex !== -1) {
        nextState[drillIndex] = action.value;
      } else nextState = [...nextState, action.value];

      return nextState;

    case 'RENAME_DRILL':
      nextState = [...state];

      const index = state.findIndex((item) => item.title === action.value.oldTitle);
      if (index !== -1) {
        nextState[index].title = action.value.newTitle;
      }
      return nextState;

    case 'DELETE_DRILL':
      drillIndex = state.findIndex((item) => item.title === action.value);
      nextState = state.filter((item, index) => index !== drillIndex);

      return nextState || state;

    default:
      return state;
  }
}

export default drillReducer;
