import constants from '../constants';
const {c, initialState} = constants

const collectionReducer = (state = initialState.collection, action) => {
  let newState = {...state}
  switch(action.type) {
    case c.ADD_CARD_TO_COLLECTION:
      const cardObj = { [action.card.id]: {...action.card} }
      newState.cards = {...newState.cards, ...cardObj}
      return newState;
    default: 
      return state;
  }
}

export default collectionReducer;