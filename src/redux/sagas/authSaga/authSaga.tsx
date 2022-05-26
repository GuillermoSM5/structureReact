import { call, put, takeEvery } from "redux-saga/effects";
import { loginAut } from "../../../Services/auth";
import { getSesion, isLoading } from "../../actions/auth";
import { addUser, removeUser } from "../../actions/user";

export function* loginWorker({ payload }: any): Generator<any> {
  try {
    // const { user } = payload;
    yield put(isLoading(true));
    const response: any = yield call(loginAut, { ...payload });
    if (typeof response !== "undefined" && response?.status === 200) {
      const token = response.data.data.token;
      const user = response.data.data.user;

      localStorage.setItem("tkn", token);
      localStorage.setItem("user", JSON.stringify(user));

      yield put(getSesion());
      yield put(addUser({ ...user }));
      yield put(isLoading(false));
    } else {
      yield put(isLoading(false));
    }
  } catch (error) {
    yield put(isLoading(false));
  }
}

export function* closeWorker() {
  localStorage.removeItem("tkn");
  localStorage.removeItem("user");

  yield put(removeUser());
}

export function* watchLogin() {
  yield takeEvery("[Auth] Login", loginWorker);
}

export function* watchCloseSesion() {
  yield takeEvery("[Auth] Logout", closeWorker);
}
