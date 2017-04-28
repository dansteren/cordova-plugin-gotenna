package com.dansteren.goTenna;

import com.gotenna.sdk.exceptions.GTInvalidAppTokenException;
import com.gotenna.sdk.GoTenna;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;

public class GoTennaPlugin extends CordovaPlugin {

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    public void getApplicationBuildId(CallbackContext callbackContext){
        callbackContext.success(GoTenna.getApplicationBuildId());
    }

    public void isInDebugMode(CallbackContext callbackContext){
         // TODO: find a way to return a boolean
        boolean inDebugMode = GoTenna.isInDebugMode();
        if (inDebugMode) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    public void setApplicationToken(String token, CallbackContext callbackContext){
        try
        {
            GoTenna.setApplicationToken(this.cordova.getActivity().getApplicationContext(), token);
            callbackContext.success("Success");
        }
        catch (GTInvalidAppTokenException e)
        {
            // Normally, this will never happen
            callbackContext.error("Invalid goTenna App Token");
        }
    }

    public void tokenIsVerified(CallbackContext callbackContext){
         // TODO: find a way to return a boolean
        boolean verified = GoTenna.tokenIsVerified();
        if (verified) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    /**
     * Executes the request and returns PluginResult.
     *
     * @param action            The action to execute.
     * @param args              JSONArray of arguments for the plugin.
     * @param callbackContext   The callback context used when calling back into JavaScript.
     * @return                  True if the action was valid, false otherwise.
     */
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("getApplicationBuildId".equals(action)) {
            this.getApplicationBuildId(callbackContext);
            return true;
        } else if ("isInDebugMode".equals(action)) {
            String token = args.getString(0);
            this.setApplicationToken(token, callbackContext);
            return true;
        } else if ("setApplicationToken".equals(action)) {
            String token = args.getString(0);
            this.setApplicationToken(token, callbackContext);
            return true;
        } else if ("tokenIsVerified".equals(action)) {
            this.tokenIsVerified(callbackContext);
            return true;
        } else if ("bluetoothIsEnabled".equals(action)) {
            XBluetoothAdapterManager.bluetoothIsEnabled(callbackContext);
            return true;
        } else if ("deviceSupportsBluetooth".equals(action)) {
            XBluetoothAdapterManager.deviceSupportsBluetooth(callbackContext);
            return true;
        } else if ("disableBluetooth".equals(action)) {
            XBluetoothAdapterManager.disableBluetooth(callbackContext);
            return true;
        } else if ("getBluetoothStatus".equals(action)) {
            XBluetoothAdapterManager.getBluetoothStatus(callbackContext);
            return true;
        } else if ("showRequestBluetoothPermissionDialog".equals(action)) {
            XBluetoothAdapterManager.showRequestBluetoothPermissionDialog(this.cordova.getActivity(), callbackContext);
            return true;
        } else if ("clearConnectedGotennaAddress".equals(action)) {
            XGTConnectionManager.clearConnectedGotennaAddress(callbackContext);
            return true;
        } else if ("getConnectedGotennaAddress".equals(action)) {
            XGTConnectionManager.getConnectedGotennaAddress(callbackContext);
            return true;
        } else if ("disconnect".equals(action)) {
            XGTConnectionManager.disconnect(callbackContext);
            return true;
        } else if ("disconnectWithRetry".equals(action)) {
            XGTConnectionManager.disconnectWithRetry(callbackContext);
            return true;
        } else if ("getGtConnectionState".equals(action)) {
            XGTConnectionManager.getGtConnectionState(callbackContext);
            return true;
        } else if ("isConnected".equals(action)) {
            XGTConnectionManager.isConnected(callbackContext);
            return true;
        } else if ("stopScan".equals(action)) {
            XGTConnectionManager.stopScan(callbackContext);
            return true;
        }
        return false; // Returning false results in a "MethodNotFound" error.
    }
}
