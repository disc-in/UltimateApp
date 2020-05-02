const initialState = [];

function programReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'COMPLETE_TRAINING':
      const existingCompletionIndex = state.findIndex(
        item => item.training.id === action.value.training.id && item.program.id === action.value.program.id,
      );
      if (existingCompletionIndex == -1) {
        nextState = [...state, action.value];
      }
      return nextState || state;
    default:
      return state;
  }
}

export default programReducer;
