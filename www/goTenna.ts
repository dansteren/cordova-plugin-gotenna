enum ConnectionState {
  Connected = 'CONNECTED',
  Disconnected = 'DISCONNECTED',
  Scanning = 'SCANNING'
}

enum BluetoothStatus {
  NotSupported = 'NOT_SUPPORTED',
  SupportedAndEnabled = 'SUPPORTED_AND_ENABLED',
  SupportedNotEnabled = 'SUPPORTED_NOT_ENABLED'
}

enum DeviceType {
  V1 = 'V1',
  Mesh = 'MESH'
}

interface IUser {
  gid: number;
  kGroupGIDs: number[];
  kMulticastGroupGIDs: number[];
  lastConnectedTime: number;
  latitude: number;
  locationAccuracy: number;
  locationTimestamp: number;
  longitude: number;
  name: string;
}

class GoTenna {
  //#region goTenna
  public getApplicationBuildId() {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'getApplicationBuildId', []);
    });
  }
  public hasSuperToken() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        result => {
          result === 'true' ? resolve(true) : resolve(false);
        },
        reject,
        'GoTenna',
        'hasSuperToken',
        []
      );
    });
  }
  public isInDebugMode() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        result => {
          result === 'true' ? resolve(true) : resolve(false);
        },
        reject,
        'GoTenna',
        'isInDebugMode',
        []
      );
    });
  }
  public setApplicationToken(token: string) {
    cordova.exec(
      result => {
        console.log('goTenna: Application Token set');
      },
      error => {
        console.error('goTenna: Invalid goTenna App Token');
      },
      'GoTenna',
      'setApplicationToken',
      [token]
    );
  }
  public tokenIsVerified() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        result => {
          result === 'true' ? resolve(true) : resolve(false);
        },
        reject,
        'GoTenna',
        'tokenIsVerified',
        []
      );
    });
  }
  //#endregion goTenna

  //#region Bluetooth
  public bluetoothIsEnabled() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        result => {
          result === 'true' ? resolve(true) : resolve(false);
        },
        reject,
        'GoTenna',
        'bluetoothIsEnabled',
        []
      );
    });
  }
  public deviceSupportsBluetooth() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        result => {
          result === 'true' ? resolve(true) : resolve(false);
        },
        reject,
        'GoTenna',
        'deviceSupportsBluetooth',
        []
      );
    });
  }
  public disableBluetooth() {
    cordova.exec(
      () => {},
      error => {
        throw new Error(error);
      },
      'GoTenna',
      'disableBluetooth',
      []
    );
  }
  public getBluetoothStatus() {
    return new Promise(
      (resolve: (bluetoothStatus: BluetoothStatus) => any, reject) => {
        cordova.exec(resolve, reject, 'GoTenna', 'getBluetoothStatus', []);
      }
    );
  }
  public showRequestBluetoothPermissionDialog() {
    cordova.exec(
      () => {},
      error => {
        throw new Error(error);
      },
      'GoTenna',
      'showRequestBluetoothPermissionDialog',
      []
    );
  }
  //#endregion Bluetooth

  //#region ConnectionManager
  public addGtConnectionListener(
    callback: (gtConnectionState: ConnectionState) => any
  ) {
    return new Promise((resolve, reject) => {
      cordova.exec(callback, reject, 'GoTenna', 'addGtConnectionListener', []);
      resolve();
    });
  }
  public clearConnectedGotennaAddress() {
    cordova.exec(
      () => {},
      error => {
        throw new Error(error);
      },
      'GoTenna',
      'clearConnectedGotennaAddress',
      []
    );
  }
  public disconnect() {
    cordova.exec(
      () => {},
      error => {
        throw new Error(error);
      },
      'GoTenna',
      'disconnect',
      []
    );
  }
  public disconnectWithRetry() {
    cordova.exec(
      () => {},
      error => {
        throw new Error(error);
      },
      'GoTenna',
      'disconnect',
      []
    );
  }
  public getConnectedGotennaAddress() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        resolve,
        reject,
        'GoTenna',
        'getConnectedGotennaAddress',
        []
      );
    });
  }
  public getGtConnectionState() {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'getGtConnectionState', []);
    });
  }
  public isConnected() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        result => {
          result === 'true' ? resolve(true) : resolve(false);
        },
        reject,
        'GoTenna',
        'isConnected',
        []
      );
    });
  }
  public scanAndConnect(deviceType?: DeviceType) {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'scanAndConnect', [deviceType]);
    });
  }
  public stopScan() {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'stopScan', []);
    });
  }
  //#endregion ConnectionManage

  //#region Command Center
  public setGoTennaGID(gid: number, username: string) {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'setGoTennaGID', [
        gid,
        username
      ]);
    });
  }
  public sendMessage(
    outgoingData: string,
    receiverGID: number,
    willEncrypt: boolean
  ) {
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, 'GoTenna', 'sendMessage', [
        outgoingData,
        receiverGID,
        willEncrypt
      ]);
    });
  }
  public setMessageListener(callback: (messageData: any) => void) {
    return new Promise((resolve, reject) => {
      cordova.exec(callback, reject, 'GoTenna', 'setMessageListener', []);
      resolve();
    });
  }
  //#endregion Command Center

  //#region UserDataStore
  public addGroupGID(groupGID: number) {
    cordova.exec(
      () => {},
      error => {
        throw new Error(error);
      },
      'GoTenna',
      'addGroupGID',
      [groupGID]
    );
  }

  public addMulticastGroupGID(groupGID: number) {
    cordova.exec(
      () => {},
      error => {
        throw new Error(error);
      },
      'GoTenna',
      'addMulticastGroupGID',
      [groupGID]
    );
  }

  public deleteCurrentUser() {
    cordova.exec(
      () => {},
      error => {
        throw new Error(error);
      },
      'GoTenna',
      'deleteCurrentUser',
      []
    );
  }

  public deleteGroupGID(groupGID: number) {
    cordova.exec(
      () => {},
      error => {
        throw new Error(error);
      },
      'GoTenna',
      'deleteGroupGID',
      [groupGID]
    );
  }

  public deleteMulticastGroupGID(groupGID: number) {
    cordova.exec(
      () => {},
      error => {
        throw new Error(error);
      },
      'GoTenna',
      'deleteMulticastGroupGID',
      [groupGID]
    );
  }

  public getCurrentUser() {
    return new Promise((resolve: (user: IUser) => void, reject) => {
      cordova.exec(
        (result: string) => resolve(JSON.parse(result)),
        reject,
        'GoTenna',
        'getCurrentUser',
        []
      );
    });
  }

  public hasGroupGID(groupGID: number) {
    return new Promise((resolve, reject) => {
      cordova.exec(
        result => {
          result === 'true' ? resolve(true) : resolve(false);
        },
        reject,
        'GoTenna',
        'hasGroupGID',
        [groupGID]
      );
    });
  }

  public hasMulticastGroupGID(groupGID: number) {
    return new Promise((resolve, reject) => {
      cordova.exec(
        result => {
          result === 'true' ? resolve(true) : resolve(false);
        },
        reject,
        'GoTenna',
        'hasMulticastGroupGID',
        [groupGID]
      );
    });
  }

  public hasValidUser() {
    return new Promise((resolve, reject) => {
      cordova.exec(
        result => {
          result === 'true' ? resolve(true) : resolve(false);
        },
        reject,
        'GoTenna',
        'hasValidUser',
        []
      );
    });
  }

  public setCurrentUser(user: IUser) {
    const userString = JSON.stringify(user);
    cordova.exec(
      () => {},
      error => {
        throw new Error(error);
      },
      'GoTenna',
      'setCurrentUser',
      [userString]
    );
  }
  //#endregion UserDataStore
}

(window as any).gotenna = new GoTenna();
