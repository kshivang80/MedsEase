
import * as types from "./actionType"

const intState={
    Productdata:[],
    isLoading:false,
    isError:false
}


const reducer=(state=intState,action)=>{

     const {type,payload}=action

     switch(type){


case types.GET_PRODUCT_DATA_REQ:return {...state,isLoading:true, isError:false}

        case types.GET_PRODUCT_DATA_SUCCESS:return {...state,isLoading:false ,isError:false ,Productdata:payload}
        
        case types.GET_PRODUCT_FAILURE:return {...state,isError:true, isLoading:false}
        
        default :return state
     }
}

export {reducer}