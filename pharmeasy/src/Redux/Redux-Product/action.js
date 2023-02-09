import axios from "axios";
import * as types from "./actionType";

const get_product_req_fn = () => {
  return { type: types.GET_PRODUCT_DATA_REQ };
};

const get_product_success_fn = (payload) => {
  return { type: types.GET_PRODUCT_DATA_SUCCESS, payload };
};

const get_product_fail_fn = () => {
  return { type: types.GET_PRODUCT_FAILURE };
};

const get_url_req_fn = () => {
  return { type: types.GET_URL_REQ };
};

export const get_url_success_fn = (payload) => {
  return { type: types.GET_URL_SUCCESS, payload };
};

const get_url_req_failure = () => {
  return { type: types.GET_URL_FAILURE };
};

const get_single_pr_req_fn = () => {
  return { type: types.GET_SINGLE_PR_REQ };
};
const get_single_pr_success_fn = (payload) => {
  return { type: types.GET_PRODUCT_DATA_SUCCESS, payload };
};
const get_single_pr_failure_fn = () => {
  return { type: types.GET_PRODUCT_FAILURE };
};

export function getProduct(params) {
  return function (dispatch) {
    dispatch(get_product_req_fn());
    return axios
      .get("https://medsease-api.onrender.com/healthcare")
      .then((res) => {
        dispatch(get_product_success_fn(res.data));
      })
      .catch((error) => {
        dispatch(get_product_fail_fn());
      });
  };
}

export function getProductUrl(params) {
  // console.log(params, "params in action");
  return function (dispatch) {
    dispatch(get_url_req_fn());
    return axios
      .get("https://medsease-api.onrender.com/healthcare", params)
      .then((res) => {
        dispatch(get_url_success_fn(res.data));
      })
      .catch((error) => {
        dispatch(get_url_req_failure());
      });
  };
}

export function getSinglePr(id) {
  return function (dispatch) {
    dispatch(get_single_pr_req_fn());
    return axios
      .get(`https://medsease-api.onrender.com/healthcare/${id}`)
      .then((res) => {
        dispatch(get_single_pr_success_fn(res.data));
      })
      .catch((error) => {
        dispatch(get_single_pr_failure_fn());
      });
  };
}

export { get_product_req_fn, get_product_success_fn, get_product_fail_fn };
