import types from "../types/user";

export const addUser = (user: any) => {
  return {
    type: types.addUser,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: types.removeUser,
  };
};
