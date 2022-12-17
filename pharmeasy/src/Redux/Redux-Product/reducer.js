import * as types from "./actionType";

const intState = {
  Productdata: [],
  isLoading: false,
  isError: false,

  dataOnfetch: [],
  singleProduct: [],
};

const reducer = (state = intState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCT_DATA_REQ:
      return { ...state, isLoading: true, isError: false };

    case types.GET_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        Productdata: payload,
      };

    case types.GET_PRODUCT_FAILURE:
      return { ...state, isError: true, isLoading: false };

    case types.GET_URL_REQ:
      return { ...state, isLoading: true };

    case types.GET_URL_SUCCESS:
      return { ...state, isLoading: false, dataOnfetch: payload };

    case types.GET_URL_FAILURE:
      return { ...state, isError: true };

    case types.GET_SINGLE_PR_REQ:
      return { ...state, isLoading: true };
    case types.GET_SINGLE_PR_SUCCESS:
      return { ...state, isLoading: false, singleProduct: payload };
    case types.GET_SINGLE_PR_FAILURE:
      return { ...state, isError: false };

    default:
      return state;
  }
};

export { reducer };
