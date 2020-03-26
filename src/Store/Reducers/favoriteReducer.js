// Store/Reducers/favoriteReducer.js

const initialState = { favoritesDrill: [] };

function toggleFavorite(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteDrillIndex = state.favoritesDrill.findIndex(item => item.id === action.value.id);
      if (favoriteDrillIndex !== -1) {
        // Le drill est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          favoritesDrill: state.favoritesDrill.filter((item, index) => index !== favoriteDrillIndex),
        };
      } else {
        nextState = {
          ...state,
          favoritesDrill: [...state.favoritesDrill, action.value],
        };
      }
      return nextState || state;
    default:
      return state;
  }
}

export default toggleFavorite;
