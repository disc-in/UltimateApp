const initialState = [];

function drillReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'SAVE_DRILL':
      // If the saved drill previously had another title, remove the drill with this old title
      const oldDrillIndex = state.findIndex((item) => item.title === action.value.oldTitle);

      if (oldDrillIndex !== -1) {
        nextState = state.filter((item, index) => index !== oldDrillIndex);
      } else nextState = [...state];

      // If the drill is already saved, replace it; otherwise add it
      let drillIndex = nextState.findIndex((item) => item.title === action.value.title);
      if (drillIndex !== -1) {
        nextState[drillIndex] = action.value;
      } else nextState = [...nextState, action.value];

      if (nextState !== undefined && nextState !== null) nextState.sort((a, b) => (a.title > b.title ? 1 : -1));

      return nextState || state;

    case 'DELETE_DRILL':
      drillIndex = state.findIndex((item) => item.title === action.value);
      nextState = state.filter((item, index) => index !== drillIndex);

      return nextState || state;

    default:
      return state;
  }
}

export default drillReducer;
