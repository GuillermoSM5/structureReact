import authAction from "../types/auth";

export const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case authAction.login:
      return state;

    case authAction.logout:
      return { ...state, isAutenticated: false };

    case authAction.setSession:
      return { ...state, isAutenticated: true };

    case authAction.isLoading:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
