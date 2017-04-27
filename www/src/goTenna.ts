import { bluetoothPackage } from './packages';

const GoTenna = {
  getApplicationBuildId: () => {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'getApplicationBuildId', []);
    });
  },
  isInDebugMode: () => {
    return new Promise((resolve, reject) => {
      cordova.exec((result) => {
        result === 'true' ? resolve(true) : resolve(false);
      }, reject, 'GoTenna', 'isInDebugMode', []);
    });
  },
  setApplicationToken: (token) => {
    cordova.exec(
      (result) => { console.log('goTenna: Application Token set'); },
      (error) => { console.error('goTenna: ' + error); },
      'GoTenna', 'setApplicationToken', [token]);
  },
  tokenIsVerified: () => {
    return new Promise((resolve, reject) => {
      cordova.exec((result) => {
        result === 'true' ? resolve(true) : resolve(false);
      }, reject, 'GoTenna', 'tokenIsVerified', []);
    });
  },
  bluetooth: bluetoothPackage,
};

(window as any).goTenna = GoTenna;
