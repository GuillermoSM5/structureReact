import { fork, all } from "redux-saga/effects";
import * as authSagas from "./authSaga";
import * as bookSagas from "./booksSagas";

export default function* rootSaga() {
  yield all(
    [...Object.values(authSagas), ...Object.values(bookSagas)].map(fork)
  );
}
