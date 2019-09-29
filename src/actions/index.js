import constants from '../constants';
const { c } = constants;

export function cardSearch(params) {
  return {
    type: c.CARD_SEARCH,
    params
  }
}

export function addCardToCollection(card) {
  return {
    type: c.ADD_CARD_TO_COLLECTION,
    card
  }
}

export function addCardToDeck(card, deck) {
  return {
    type: c.ADD_CARD_TO_DECK,
    card, 
    deck
  }
}
