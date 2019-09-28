import "regenerator-runtime/runtime";
import { put, take, takeEvery, takeLatest, all, call, select } from 'redux-saga/effects';
import constants from './constants';
import {formatSearch} from './util';
const { c } = constants;

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

export function *setSearchedCards(action) {
  
}

// watcher sagas ==============================
export function *watchCardSearch() {
  yield takeEvery(c.CARD_SEARCH, cardSearch);
}

export function *watchSetSearchedCards() {
  yield takeEvery(c.SEARCHED_CARDS_RECIEVED, setSearchedCards);
}

// root saga ==============================

export default function *rootSaga() {
  yield all([
    watchCardSearch(),
    watchSetSearchedCards(),
  ])
}
