import constants from '../constants';
const {c, initialState} = constants

const deckReducer = (state = initialState.decks, action) => {
  let newState = Object.assign({}, state)
  switch(action.type) {
    case c.ADD_CARD_TO_DECK:
      // newState.decks[]
      return newState;
    default: 
    return state;
  }
}

export default deckReducer;