import constants from './../constants';
const { c, initialState } = constants;

const searchReducer = (state = initialState, action) => {
  let newState = state
  switch(action.type) {
    case c.CARD_SEARCH:
      newState.search.searching = true
      return newState;
    case c.SEARCH_FOUND:
      newState.search.searching = false
      return newState;
    default: 
      return state;
  }
};

export default searchReducer;