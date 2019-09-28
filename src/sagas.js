import "regenerator-runtime/runtime";
import { put, take, takeEvery, takeLatest, all, call, select } from 'redux-saga/effects';
import constants from './constants';
import {formatSearch} from './util';
const { c } = constants;

// worker sagas ==============================

export function *cardSearch() {
  console.log('in saga')
  
  formatSearch(action.pararms)

  const url = `https://api.scryfall.com/cards/search?${query}`;
  const initObj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      appkey: CLIENT_APP_KEY
    },
  };

  try {
    const response = yield fetch(url, initObj).then(res => res.json());
    // yield put({ type: c.??, cards: response });
  } catch (error) {
    console.warn("error getting cards: ", error);
  }
  yeild(null);
}

// watcher sagas ==============================

export function *watchCardSearch() {
  while (true) {
    yield takeEvery(c.CARD_SEARCH, cardSearch);
  }
}

// root saga ==============================

export default function *rootSaga() {
  yield all([
    // watcher sagas go here
    watchCardSearch(),
  ])
}
