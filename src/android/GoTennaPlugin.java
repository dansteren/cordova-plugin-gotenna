package com.dansteren.gotenna;

import com.gotenna.sdk.exceptions.GTInvalidAppTokenException;
import com.gotenna.sdk.GoTenna;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;

public class GoTennaPlugin extends CordovaPlugin {

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
            Bluetooth.bluetoothIsEnabled(callbackContext);
            return true;
        } else if ("deviceSupportsBluetooth".equals(action)) {
            Bluetooth.deviceSupportsBluetooth(callbackContext);
            return true;
        } else if ("disableBluetooth".equals(action)) {
            Bluetooth.disableBluetooth(callbackContext);
            return true;
        } else if ("getBluetoothStatus".equals(action)) {
            Bluetooth.getBluetoothStatus(callbackContext);
            return true;
        }
        return false; // Returning false results in a "MethodNotFound" error.
    }
}
