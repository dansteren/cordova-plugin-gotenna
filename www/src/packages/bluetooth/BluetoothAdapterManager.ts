export const BluetoothAdapterManager = {
  bluetoothIsEnabled: () => {
    return new Promise((resolve, reject) => {
      cordova.exec((result) => {
        result === 'true' ? resolve(true) : resolve(false);
      }, reject, 'GoTenna', 'bluetoothIsEnabled', []);
    });
  },
  deviceSupportsBluetooth: () => {
    return new Promise((resolve, reject) => {
      cordova.exec((result) => {
        result === 'true' ? resolve(true) : resolve(false);
      }, reject, 'GoTenna', 'deviceSupportsBluetooth', []);
    });
  },
  disableBluetooth: (token) => {
    cordova.exec(
      () => { },
      (error) => { throw new Error(error); },
      'GoTenna', 'disableBluetooth', [token]);
  },
  getBluetoothStatus: () => {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'getBluetoothStatus', []);
    });
  },
  showRequestBluetoothPermissionDialog: () => {
    cordova.exec(
      () => { },
      (error) => { throw new Error(error); },
      'GoTenna', 'showRequestBluetoothPermissionDialog', []);
  },
};
