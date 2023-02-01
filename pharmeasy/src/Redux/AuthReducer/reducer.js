import * as types from "./actionType";

const initialState = {
  isAuth: false,
  user: "",
  isAuthLoading: false,
  isAuthError: false,
  isRegister: false,
};

const reducer = (oldState = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.USER_lOGIN_REQUEST || types.USER_REGISTER_REQUEST:
      return { ...oldState, isAuthLoading: true };
    case types.USER_lOGIN_SUCCESS:
      return {
        ...oldState,
        user: payload.user[0],
        isAuth: payload.islogin,
        isAuthLoading: false,
      };
    case types.USER_REGISTER_SUCCESS:
      return {
        ...oldState };
    case types.USER_lOGIN_ERROR || types.USER_REGISTER_ERROR:
      return { ...oldState, isAuthError: true };
    case types.USER_lOGOUT_SUCCESS:
      return initialState;
    default:
      return oldState;
  }
};

export { reducer };
