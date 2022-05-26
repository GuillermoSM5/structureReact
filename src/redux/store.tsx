import { configureStore } from "@reduxjs/toolkit";
import inicialState from "./inicialState";
import { authReducer } from "./reducers/authReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { userReducer } from "./reducers/userReducer";
import { bookReducer } from "./reducers/bookReducer";

const reducers = { auth: authReducer, user: userReducer, books: bookReducer };

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { ...reducers },
  preloadedState: inicialState,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
