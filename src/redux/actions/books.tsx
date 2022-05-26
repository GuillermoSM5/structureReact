import types from "../types/books";

export const getBooks = ({ onSucces }: any) => {
  return {
    type: types.getBooks,
    payload: onSucces,
  };
};
