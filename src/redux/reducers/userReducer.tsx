import userTypes from "../types/user";

export const userReducer = (state = {}, action: any) => {
  switch (action.type) {
    case userTypes.addUser:
      return { ...action.payload };

    case userTypes.removeUser:
      return {};

    default:
      return state;
  }
};
