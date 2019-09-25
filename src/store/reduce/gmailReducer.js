import * as actionTypes from '../actionType';
import {getgmailListApi} from '../apis/gmail';
const initState = {
  gmailList: [],
  mailDate: ``,
};

export const getGmailListReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_GMAIL:
      const gmailListData = action.payload;
      console.warn(`Reducer Called`, gmailListData);
      return {
        ...state,
        gmailList: gmailListData,
        mailDate: gmailListData.date,
      };
  }
  return state;
};
