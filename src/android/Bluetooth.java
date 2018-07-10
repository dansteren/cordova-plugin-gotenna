package com.dansteren.gotenna;

import com.gotenna.sdk.bluetooth.BluetoothAdapterManager;

import org.apache.cordova.CallbackContext;

public class Bluetooth {

    public static void bluetoothIsEnabled(CallbackContext callbackContext){
         // TODO: find a way to return a boolean
        boolean enabled = BluetoothAdapterManager.getInstance().bluetoothIsEnabled();
        if (enabled) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    public static void deviceSupportsBluetooth(CallbackContext callbackContext){
         // TODO: find a way to return a boolean
        boolean enabled = BluetoothAdapterManager.getInstance().deviceSupportsBluetooth();
        if (enabled) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    public static void disableBluetooth(CallbackContext callbackContext){
        BluetoothAdapterManager.getInstance().disableBluetooth();
        callbackContext.success();
    }

    public static void getBluetoothStatus(CallbackContext callbackContext){
        BluetoothAdapterManager.BluetoothStatus status = BluetoothAdapterManager.getInstance().getBluetoothStatus();
        callbackContext.success(status.toString());
    }
}
