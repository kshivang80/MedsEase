import * as types from "./actionType"
  
const initialState={
  isAuth:false,
  token:"",
  isAuthLoading:false,
  isAuthError:false
};


const reducer=(oldState=initialState,action)=>{
  const {payload,type}=action;
  switch(type){
      case types.USER_lOGIN_REQUEST:
          return{...oldState,isAuthLoading:true};
      case types.USER_lOGIN_SUCCESS:
          return{...oldState,token:payload,isAuth:true,isAuthLoading:false};
    case types.USER_lOGIN_ERROR:
      return { ...oldState, isAuthError: true };
    case types.USER_lOGOUT_SUCCESS: return initialState;
      default:
          return oldState; 
  }
} 

export {reducer}