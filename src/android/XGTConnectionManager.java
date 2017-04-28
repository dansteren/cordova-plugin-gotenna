package com.dansteren.goTenna;

import com.gotenna.sdk.bluetooth.GTConnectionManager;

import org.apache.cordova.CallbackContext;

public class XGTConnectionManager {

    public static void clearConnectedGotennaAddress(CallbackContext callbackContext){
        GTConnectionManager.getInstance().clearConnectedGotennaAddress();
        callbackContext.success();
    }

    public static void disconnect(CallbackContext callbackContext){
        GTConnectionManager.getInstance().disconnect();
        callbackContext.success();
    }

    public static void disconnectWithRetry(CallbackContext callbackContext){
        GTConnectionManager.getInstance().disconnectWithRetry();
        callbackContext.success();
    }

    public static void getConnectedGotennaAddress(CallbackContext callbackContext){
        String connectedGotennaAddress = GTConnectionManager.getInstance().getConnectedGotennaAddress();
        callbackContext.success(connectedGotennaAddress);
    }

    public static void getGtConnectionState(CallbackContext callbackContext){
        GTConnectionManager.GTConnectionState connectionState = GTConnectionManager.getInstance().getGtConnectionState();
        callbackContext.success(connectionState.toString());
    }

    public static void isConnected(CallbackContext callbackContext){
        boolean connected = GTConnectionManager.getInstance().isConnected();
        if (connected) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    public static void stopScan(CallbackContext callbackContext){
        GTConnectionManager.getInstance().stopScan();
        callbackContext.success();
    }
}
