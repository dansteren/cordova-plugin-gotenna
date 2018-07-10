# Cordova goTenna Plugin

This plugin exposes the [goTenna SDK](https://github.com/gotenna/PublicSDK) to your cordova application.

[![gotenna](https://img.shields.io/badge/built%20on-goTenna-1638dc.svg)](http://www.gotenna.com/)

**Disclaimer:** This plugin is not created by nor affiliated with goTenna Inc.

## Usage

### Supported Platforms

- Android

### Prerequisites

- Cordova 8.0.0
- Cordova Android 7.0.0

The minimum android sdk level supported by Cordova Plugin Gotenna is 18. Add the "android-minSdkVersion" preference to the config.xml file a the root of your cordova project:

```xml
<!-- config.xml -->
<widget id="tld.company.app" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
  <preference name="android-minSdkVersion" value="18" />
</widget>
```

### Installation

Because this plugin is still a work in progress it is not currently published on the cordova registry. In the meantime it can be installed with

```
cordova plugin add https://github.com/dansteren/cordova-plugin-gotenna.git
```

### Usage

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

## Development

### Getting Started

1. `git clone`
2. `npm install`
3. `npm start`
