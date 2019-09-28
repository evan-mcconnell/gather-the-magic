import constants from './../constants';
const { c, initialState } = constants;

const searchReducer = (state = initialState.search, action) => {
  let newState = Object.assign({}, state)
  switch(action.type) {
    case c.CARD_SEARCH:
      newState.searching = true
      return newState;
    case c.SEARCHED_CARDS_FORMATTED:
      newState.searching = false
      newState.cards = action.cards
      return newState;
    default: 
      return state;
  }
};

export default searchReducer;