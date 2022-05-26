import { call, takeEvery } from "redux-saga/effects";
import { getBooks } from "../../../Services/books";

export function* getBooksWorker({ payload }: any): Generator<any> {
  try {
    const response: any = yield call(getBooks);
    if (typeof response !== "undefined" && response?.status === 200) {
      payload(response.data.data);
    }
  } catch (error) {}
}

export function* watchGetBook() {
  yield takeEvery("[Books] getBooks", getBooksWorker);
}
