import MailCore from 'react-native-mailcore';
import {
  HEADERS,
  STRUCTURE,
  INTERNAL_DATE,
  HEADER_SUBJECT,
  FLAGS,
  EXTRA_HEADERS,
} from '../constants/IMAPMessagesRequestKind';

export const getgmailListApi = async data => {
  await MailCore.loginImap(data);
  let requestKind =
    HEADERS |
    STRUCTURE |
    INTERNAL_DATE |
    HEADER_SUBJECT |
    FLAGS |
    EXTRA_HEADERS;

  const result = await MailCore.getMails({
    folder: 'INBOX',
    requestKind: requestKind,
  });

  let promises = [];
  for (let i = 0; i < result.mails.length; i++) {
    let mail = result.mails[i];
    let promise = new Promise((resolve, reject) => {
      MailCore.getMail({
        folder: 'INBOX',
        messageId: mail.id,
        requestKind: requestKind,
      })
        .then(mailDetails => {
          mail.body = mailDetails.body;
          resolve(mail);
        })
        .catch(error => reject(error));
    });
    promises.push(promise);
  }
  mail = await Promise.all(promises);

  return mail;
};
