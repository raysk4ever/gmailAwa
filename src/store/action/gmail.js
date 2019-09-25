import * as actionTypes from '../actionType';
import {getgmailListApi} from '../apis/gmail';

export const getGmailList = data => {
  const payload = getgmailListApi(data);
  return {
    type: actionTypes.GET_LIST_GMAIL,
    payload,
  };
};
