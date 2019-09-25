import * as actionTypes from "../actionTypes";

const initState = {
    items: {}
}

export const getItemReducer = (state = initState , action)=>{
    switch(action.type){
        case actionTypes.GET_ITEMS:
            console.warn(`Reducer Called`);
            return {
               ...state,
               items: action.payload
            }
    }
    return state;
}
