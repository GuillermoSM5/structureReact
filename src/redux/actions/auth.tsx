import types from "../types/auth";

export const isLoading = (value: boolean) => {
  return {
    type: types.isLoading,
    payload: value,
  };
};

export const loginA = (user: any) => {
  return {
    type: types.login,
    payload: user,
  };
};

export const closeSesion = () => {
  return {
    type: types.logout,
  };
};

export const getSesion = () => {
  return {
    type: types.setSession,
  };
};
