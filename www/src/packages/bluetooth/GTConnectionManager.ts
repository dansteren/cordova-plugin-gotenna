export const GTConnectionManager = {
  clearConnectedGotennaAddress: () => {
    cordova.exec(
      () => { },
      (error) => { throw new Error(error); },
      'GoTenna', 'clearConnectedGotennaAddress', []);
  },
  disconnect: () => {
    cordova.exec(
      () => { },
      (error) => { throw new Error(error); },
      'GoTenna', 'disconnect', []);
  },
  disconnectWithRetry: () => {
    cordova.exec(
      () => { },
      (error) => { throw new Error(error); },
      'GoTenna', 'disconnect', []);
  },
  getConnectedGotennaAddress: () => {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'getConnectedGotennaAddress', []);
    });
  },
  getGtConnectionState: () => {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'getGtConnectionState', []);
    });
  },
  isConnected: () => {
    return new Promise((resolve, reject) => {
      cordova.exec((result) => {
        result === 'true' ? resolve(true) : resolve(false);
      }, reject, 'GoTenna', 'isConnected', []);
    });
  },
  stopScan: () => {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'stopScan', []);
    });
  },
};
