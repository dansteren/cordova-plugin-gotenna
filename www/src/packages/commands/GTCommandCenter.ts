export const GTCommandCenter = {
  setGoTennaGID: (gid: number, username: string) => {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'setGoTennaGID', [gid, username]);
    });
  },
  sendMessage: (outgoingData: string, receiverGID: number, willEncrypt: boolean) => {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'sendMessage',
                   [outgoingData, receiverGID, willEncrypt]);
    });
  },
  setMessageListener: (callback: (messageData: any) => void) => {
    return new Promise((resolve, reject) => {
      cordova.exec(callback, reject, 'GoTenna', 'setMessageListener', []);
      resolve();
    });
  },
};
