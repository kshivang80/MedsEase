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
const logOutSuccess=()=>{
    return {
       type:types.USER_lOGOUT_SUCCESS,
       
    }
};

const loginError=()=>{
    return {
       type:types.USER_lOGIN_ERROR
    }
};

export {loginRequest,loginSuccess,loginError,logOutSuccess}