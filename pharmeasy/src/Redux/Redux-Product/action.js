




import axios from "axios"
import * as types from "./actionType"


const get_product_req_fn=()=>{
    return {type:types.GET_PRODUCT_DATA_REQ}
}

const get_product_success_fn=(payload)=>{

     return {type:types.GET_PRODUCT_DATA_SUCCESS,payload}
}

const get_product_fail_fn=()=>{
    return  {type:types.GET_PRODUCT_FAILURE}
}



export  function getProduct() {
     return function (dispatch){
        dispatch(get_product_req_fn())
        return axios.get('http://localhost:3001/healthCareProductsPage').then((res)=>{
            
      

        setTimeout(()=>{
            dispatch(get_product_success_fn(res.data))
        },2000)
        
    }).catch((error)=>{
            dispatch(get_product_fail_fn())
        })
     }
}



export {get_product_req_fn,get_product_success_fn,get_product_fail_fn}