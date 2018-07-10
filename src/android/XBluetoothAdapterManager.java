package com.dansteren.gotenna;

import android.app.Activity;

import com.gotenna.sdk.bluetooth.BluetoothAdapterManager;

import org.apache.cordova.CallbackContext;

public class XBluetoothAdapterManager {

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
        boolean supported = BluetoothAdapterManager.getInstance().deviceSupportsBluetooth();
        if (supported) {
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

    public static void showRequestBluetoothPermissionDialog(Activity appActivity, CallbackContext callbackContext){
        try {
            final int REQUEST_ENABLE_BT = 1003;
            BluetoothAdapterManager.showRequestBluetoothPermissionDialog(appActivity, REQUEST_ENABLE_BT);
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error(e.getMessage());
        }
    }
}
