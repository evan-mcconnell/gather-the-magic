import "regenerator-runtime/runtime";
import { put, take, takeEvery, takeLatest, all, call, select } from 'redux-saga/effects';


// worker sagas ==============================

export function *firstSaga() {
  yeild(null);
}

// watcher sagas ==============================

export function *watchFirstSaga() {
  while (true) {
    yield takeEvery(c.TRIGGER, firstSaga);
  }
}

// root saga ==============================

export default function *rootSaga() {
  yield all([
    // watcher sagas go here
    watchFirstSaga(),
  ])
}
