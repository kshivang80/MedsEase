import * as types from "./actionType"

const loginRequest=()=>{
     return {
        type:types.USER_lOGIN_REQUEST
     }
};

const loginSuccess=(token)=>{
    return {
       type:types.USER_lOGIN_SUCCESS,
       payload:token
    }
};

const loginError=()=>{
    return {
       type:types.USER_lOGIN_ERROR
    }
};

export {loginRequest,loginSuccess,loginError}