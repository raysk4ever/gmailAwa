import * as actionTypes from "../actionTypes";

export const getItem = (payload)=>{
    return {
        type: actionTypes.GET_ITEMS,
        payload
    }
}
