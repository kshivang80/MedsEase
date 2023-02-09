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
const registerRequest=()=>{
     return {
        type:types.USER_REGISTER_REQUEST
     }
};

const registerSuccess=(token)=>{
    return {
       type:types.USER_REGISTER_SUCCESS,
       payload:token
    }
};

const registerError=()=>{
   return {
      type:types.USER_REGISTER_ERROR
   }
};
const logOutSuccess=()=>{
    return {
       type:types.USER_lOGOUT_SUCCESS,
       
    }
};

export {loginRequest,loginSuccess,loginError,logOutSuccess,registerError,registerRequest,registerSuccess}