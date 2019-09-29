import "regenerator-runtime/runtime";
import { put, take, takeEvery, takeLatest, all, call, select } from 'redux-saga/effects';
import constants from './constants';
import {formatSearch} from './util';
const { c, Card } = constants;

// worker sagas ==============================

export function *cardSearch(action) {
  
  const query = formatSearch(action.params);

  console.log('in SAGA', query)

  const url = `https://api.scryfall.com/cards/search?${query}`;
  const initObj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  };
  try {
    const response = yield fetch(url, initObj).then(res => res.json());
    console.log("RESPONSE FROM SERVER:  \n", response)
    response.object === "error" ? console.log("Status: ", response.status, response.details) : null;
    yield put({ type: c.SEARCHED_CARDS_RECIEVED, cards: response });
  } catch (error) {
    console.warn("error getting cards: ", error);
  }
  yield(null);
}

export function *formatSearchedCards(action) {
  const rawCardArr = action.cards.data
  let cardDisplayArr = rawCardArr.map((card) => {
    let newCard = new Card(
      card.id,
      card.name, 
      card.type_line, 
      card.power, 
      card.toughness, 
      card.colors, 
      card.color_identity,
      card.mana_cost,
      card.cmc,
      card.oracle_text)
    return newCard;
  })
  console.log("new format", cardDisplayArr)
  yield put ({ type: c.SEARCHED_CARDS_FORMATTED, cards: cardDisplayArr})
}

// watcher sagas ==============================

export function *watchCardSearch() {
  yield takeEvery(c.CARD_SEARCH, cardSearch);
}

export function *watchFormatSearchedCards() {
  yield takeEvery(c.SEARCHED_CARDS_RECIEVED, formatSearchedCards);
}

// root saga ==============================

export default function *rootSaga() {
  yield all([
    watchCardSearch(),
    watchFormatSearchedCards(),
  ])
}
