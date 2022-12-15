




import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"
import * as types from "./actionType"


const get_product_req_fn = () => {
    return { type: types.GET_PRODUCT_DATA_REQ }
}

const get_product_success_fn = (payload) => {

    return { type: types.GET_PRODUCT_DATA_SUCCESS, payload }
}

const get_product_fail_fn = () => {
    return { type: types.GET_PRODUCT_FAILURE }
}

const get_url_req_fn=()=>{
    return {type:types.GET_URL_REQ}
}

const get_url_success_fn=(payload)=>{
    return {type:types.GET_URL_SUCCESS,payload}
}

const get_url_req_failure=()=>{
    return {type:types.GET_URL_FAILURE}
}


export function getProduct() {
    return function (dispatch) {
        dispatch(get_product_req_fn())
        return axios.get('http://localhost:3001/healthcare/').then((res) => {

            dispatch(get_product_success_fn(res.data))

        }).catch((error) => {
            dispatch(get_product_fail_fn())
        })
    }
}


export function getProductUrl(params){
return function(dispatch){

    dispatch(get_url_req_fn())
    return axios.get('http://localhost:3001/healthcare',params).then((res)=>{
        dispatch(get_url_success_fn(res.data))
    }).catch((error)=>{
        dispatch(get_url_req_failure())
    })
}
}



export { get_product_req_fn, get_product_success_fn, get_product_fail_fn }