import bookAction from "../types/books";

export const bookReducer = (state = {}, action: any) => {
  switch (action.type) {
    case bookAction.getBooks:
      return state;

    default:
      return state;
  }
};
