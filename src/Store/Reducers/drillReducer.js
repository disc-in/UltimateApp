const initialState = [];

function drillReducer(state = initialState, action) {
  let nextState;
  console.log(action.type);
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
    default:
      return state;
  }
}

export default drillReducer;
