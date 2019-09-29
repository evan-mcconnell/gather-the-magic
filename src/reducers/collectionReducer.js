import constants from '../constants';
const {c, initialState} = constants

const collectionReducer = (state = initialState.collection, action) => {
  let newState = Object.assign({}, state)
  switch(action.c) {
    case c.ADD_CARD_TO_COLLECTION:
      const id = action.card.id
      const cardObj = { id: card }
      newState.cards = {...newState, cardObj}
      return newState;
    default: 
      return state;
  }
}

export default collectionReducer;