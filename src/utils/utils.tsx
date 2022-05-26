import autoStore from "../redux/store";
import { getSesion } from "../redux/actions/auth";
import { addUser } from "../redux/actions/user";

export const initialConfigurations = () => {
  if (localStorage.tkn && localStorage.user) {
    const user = JSON.parse(localStorage.user);
    autoStore.dispatch(getSesion());
    autoStore.dispatch(addUser(user));
  }
};
