# Cordova goTenna Plugin

This plugin exposes the [goTenna SDK](https://github.com/gotenna/PublicSDK) to your cordova application.

[![gotenna](https://cloud.githubusercontent.com/assets/5455419/21669658/f339e666-d2ca-11e6-8461-0883542a80a5.png)](http://www.gotenna.com/)


**Disclaimer:** This plugin is not created by nor affiliated with goTenna Inc.


## Getting Started


### Installation

Because this plugin is still a work in progress it is not currently published on the cordova registry. In the meantime it can be installed with

```
cordova plugin add https://github.com/dansteren/cordova-plugin-gotenna.git
```

### Use

The goTenna SDK is attached directly to `window`. All methods are organized according to the package structure of the original sdk. Examples:

```javascript
window.goTenna.setApplicationToken('your-token-here');
const result = await window.goTenna.bluetooth.BluetoothAdapterManager.getBluetoothStatus();
```

Remember to initialize your application with your unique application token before you do anything else.

```javascript
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  // Plugins are now available.
  window.goTenna.setApplicationToken('your-token-here');
}
```

### Disclaimers

This project is a work in progress. As such the API may change. If you have any comments or feedback feel free to open an issue or contact me directly.




