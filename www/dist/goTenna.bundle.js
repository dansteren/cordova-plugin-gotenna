/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(6));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var packages_1 = __webpack_require__(0);
var packages_2 = __webpack_require__(0);
var GoTenna = {
    getApplicationBuildId: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'GoTenna', 'getApplicationBuildId', []);
        });
    },
    isInDebugMode: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(function (result) {
                result === 'true' ? resolve(true) : resolve(false);
            }, reject, 'GoTenna', 'isInDebugMode', []);
        });
    },
    setApplicationToken: function (token) {
        cordova.exec(function (result) { console.log('goTenna: Application Token set'); }, function (error) { console.error('goTenna: Invalid goTenna App Token'); }, 'GoTenna', 'setApplicationToken', [token]);
    },
    tokenIsVerified: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(function (result) {
                result === 'true' ? resolve(true) : resolve(false);
            }, reject, 'GoTenna', 'tokenIsVerified', []);
        });
    },
    bluetooth: packages_1.bluetoothPackage,
    commands: packages_2.commandsPackage,
};
window.goTenna = GoTenna;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BluetoothAdapterManager = {
    bluetoothIsEnabled: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(function (result) {
                result === 'true' ? resolve(true) : resolve(false);
            }, reject, 'GoTenna', 'bluetoothIsEnabled', []);
        });
    },
    deviceSupportsBluetooth: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(function (result) {
                result === 'true' ? resolve(true) : resolve(false);
            }, reject, 'GoTenna', 'deviceSupportsBluetooth', []);
        });
    },
    disableBluetooth: function (token) {
        cordova.exec(function () { }, function (error) { throw new Error(error); }, 'GoTenna', 'disableBluetooth', [token]);
    },
    getBluetoothStatus: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'GoTenna', 'getBluetoothStatus', []);
        });
    },
    showRequestBluetoothPermissionDialog: function () {
        cordova.exec(function () { }, function (error) { throw new Error(error); }, 'GoTenna', 'showRequestBluetoothPermissionDialog', []);
    },
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GTConnectionManager = {
    addGtConnectionListener: function (callback) {
        return new Promise(function (resolve, reject) {
            cordova.exec(callback, reject, 'GoTenna', 'addGtConnectionListener', []);
            resolve();
        });
    },
    clearConnectedGotennaAddress: function () {
        cordova.exec(function () { }, function (error) { throw new Error(error); }, 'GoTenna', 'clearConnectedGotennaAddress', []);
    },
    disconnect: function () {
        cordova.exec(function () { }, function (error) { throw new Error(error); }, 'GoTenna', 'disconnect', []);
    },
    disconnectWithRetry: function () {
        cordova.exec(function () { }, function (error) { throw new Error(error); }, 'GoTenna', 'disconnect', []);
    },
    getConnectedGotennaAddress: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'GoTenna', 'getConnectedGotennaAddress', []);
        });
    },
    getGtConnectionState: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'GoTenna', 'getGtConnectionState', []);
        });
    },
    isConnected: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(function (result) {
                result === 'true' ? resolve(true) : resolve(false);
            }, reject, 'GoTenna', 'isConnected', []);
        });
    },
    scanAndConnect: function (deviceType) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'GoTenna', 'scanAndConnect', [deviceType]);
        });
    },
    stopScan: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'GoTenna', 'stopScan', []);
        });
    },
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BluetoothAdapterManager_1 = __webpack_require__(2);
var GTConnectionManager_1 = __webpack_require__(3);
exports.bluetoothPackage = {
    BluetoothAdapterManager: BluetoothAdapterManager_1.BluetoothAdapterManager,
    GTConnectionManager: GTConnectionManager_1.GTConnectionManager,
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GTCommandCenter = {
    setGoTennaGID: function (gid, username) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'GoTenna', 'setGoTennaGID', [gid, username]);
        });
    },
    sendMessage: function (outgoingData, receiverGID, willEncrypt) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'GoTenna', 'sendMessage', [outgoingData, receiverGID, willEncrypt]);
        });
    },
    setMessageListener: function (callback) {
        return new Promise(function (resolve, reject) {
            cordova.exec(callback, reject, 'GoTenna', 'setMessageListener', []);
            resolve();
        });
    },
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GTCommandCenter_1 = __webpack_require__(5);
exports.commandsPackage = {
    GTCommandCenter: GTCommandCenter_1.GTCommandCenter,
};


/***/ })
/******/ ]);