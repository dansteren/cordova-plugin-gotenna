export const GTCommandCenter = {
  setGoTennaGID: (gid, username) => {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'setGoTennaGID', [gid, username]);
    });
  },
};
