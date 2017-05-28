package com.dansteren.goTenna;

import com.gotenna.sdk.bluetooth.GTConnectionManager;
import com.gotenna.sdk.bluetooth.GTConnectionManager.GTConnectionListener;
import com.gotenna.sdk.bluetooth.GTConnectionManager.GTConnectionState;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;

public class XGTConnectionManager implements GTConnectionListener {

    public CallbackContext callbackContext;

    public void addGtConnectionListener(CallbackContext callbackContext){
        this.callbackContext = callbackContext;
        GTConnectionManager.getInstance().addGtConnectionListener(this);
    }

    public void clearConnectedGotennaAddress(CallbackContext callbackContext){
        GTConnectionManager.getInstance().clearConnectedGotennaAddress();
        callbackContext.success();
    }

    public void disconnect(CallbackContext callbackContext){
        GTConnectionManager.getInstance().disconnect();
        callbackContext.success();
    }

    public void disconnectWithRetry(CallbackContext callbackContext){
        GTConnectionManager.getInstance().disconnectWithRetry();
        callbackContext.success();
    }

    public void getConnectedGotennaAddress(CallbackContext callbackContext){
        String connectedGotennaAddress = GTConnectionManager.getInstance().getConnectedGotennaAddress();
        callbackContext.success(connectedGotennaAddress);
    }

    public void getGtConnectionState(CallbackContext callbackContext){
        GTConnectionManager.GTConnectionState connectionState = GTConnectionManager.getInstance().getGtConnectionState();
        callbackContext.success(connectionState.toString());
    }

    public void isConnected(CallbackContext callbackContext){
        boolean connected = GTConnectionManager.getInstance().isConnected();
        if (connected) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    public void scanAndConnect(CallbackContext callbackContext){
        GTConnectionManager.getInstance().scanAndConnect();
        PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
    }

    public void stopScan(CallbackContext callbackContext){
        GTConnectionManager.getInstance().stopScan();
        callbackContext.success();
    }

    @Override
    public void onConnectionStateUpdated(GTConnectionState gtConnectionState)
    {
        PluginResult result = new PluginResult(PluginResult.Status.OK, gtConnectionState.toString());
        result.setKeepCallback(true);
        this.callbackContext.sendPluginResult(result);
    }
}
