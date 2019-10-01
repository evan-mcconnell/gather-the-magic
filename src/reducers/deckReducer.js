import constants from '../constants';
const {c, initialState} = constants

const deckReducer = (state = initialState.decks, action) => {
  let newState = Object.assign({}, state)
  switch(action.type) {
    case c.ADD_CARD_TO_DECK:
      // const currentDeck = action.deckId
      // const cardObj = { [action.card.id]: {...action.card} }
      // newState.decks[currentDeck] = {...newState.decks[currentDeck], ...cardObj}
      return newState;
    default: 
    return state;
  }
}

export default deckReducer;