package com.dansteren.gotenna;

import com.gotenna.sdk.bluetooth.GTConnectionManager.GTDeviceType;
import com.gotenna.sdk.exceptions.GTInvalidAppTokenException;
import com.gotenna.sdk.GoTenna;
import com.gotenna.sdk.user.User;

import android.Manifest;
import android.content.pm.PackageManager;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

public class GoTennaPlugin extends CordovaPlugin {

    public static final String COARSE_LOCATION = Manifest.permission.ACCESS_COARSE_LOCATION;
    public static final int COARSE_LOCATION_REQ_CODE = 0;
    public static final int FINE_LOCATION_REQ_CODE = 1;

    public CallbackContext callbackContext;

    public XGTConnectionManager xgtConnectionManager;
    public XGTCommandCenter xgtCommandCenter;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        this.xgtConnectionManager = new XGTConnectionManager();
        this.xgtCommandCenter = new XGTCommandCenter();
    }

    public void getApplicationBuildId(CallbackContext callbackContext) {
        callbackContext.success(GoTenna.getApplicationBuildId());
    }

    public void hasSuperToken(CallbackContext callbackContext) {
        // TODO: find a way to return a boolean
        boolean hasSuperToken = GoTenna.hasSuperToken();
        if (hasSuperToken) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    public void isInDebugMode(CallbackContext callbackContext) {
        // TODO: find a way to return a boolean
        boolean inDebugMode = GoTenna.isInDebugMode();
        if (inDebugMode) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    public void setApplicationToken(String token, CallbackContext callbackContext) {
        try {
            GoTenna.setApplicationToken(this.cordova.getActivity().getApplicationContext(), token);
            callbackContext.success("Success");
        } catch (GTInvalidAppTokenException e) {
            // Normally, this will never happen
            callbackContext.error("Invalid goTenna App Token");
        }
    }

    public void tokenIsVerified(CallbackContext callbackContext) {
        // TODO: find a way to return a boolean
        boolean verified = GoTenna.tokenIsVerified();
        if (verified) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    protected void getCoarseLocationPermission() {
        cordova.requestPermission(this, COARSE_LOCATION_REQ_CODE, COARSE_LOCATION);
    }

    /**
     * Executes the request and returns PluginResult.
     *
     * @param action          The action to execute.
     * @param args            JSONArray of arguments for the plugin.
     * @param callbackContext The callback context used when calling back into
     *                        JavaScript.
     * @return True if the action was valid, false otherwise.
     */
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("getApplicationBuildId".equals(action)) {
            this.getApplicationBuildId(callbackContext);
            return true;
        } else if ("hasSuperToken".equals(action)) {
            this.hasSuperToken(callbackContext);
            return true;
        } else if ("isInDebugMode".equals(action)) {
            this.isInDebugMode(callbackContext);
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
            xgtConnectionManager.clearConnectedGotennaAddress(callbackContext);
            return true;
        } else if ("addGtConnectionListener".equals(action)) {
            xgtConnectionManager.addGtConnectionListener(callbackContext);
            return true;
        } else if ("disconnect".equals(action)) {
            xgtConnectionManager.disconnect(callbackContext);
            return true;
        } else if ("disconnectWithRetry".equals(action)) {
            xgtConnectionManager.disconnectWithRetry(callbackContext);
            return true;
        } else if ("getConnectedGotennaAddress".equals(action)) {
            xgtConnectionManager.getConnectedGotennaAddress(callbackContext);
            return true;
        } else if ("getGtConnectionState".equals(action)) {
            xgtConnectionManager.getGtConnectionState(callbackContext);
            return true;
        } else if ("isConnected".equals(action)) {
            xgtConnectionManager.isConnected(callbackContext);
            return true;
        } else if ("scanAndConnect".equals(action)) {
            if (cordova.hasPermission(COARSE_LOCATION)) {
                if (args.isNull(0)) {
                    xgtConnectionManager.scanAndConnect(callbackContext);
                } else {
                    String deviceTypeString = args.getString(0);
                    GTDeviceType deviceType = GTDeviceType.valueOf(deviceTypeString);
                    xgtConnectionManager.scanAndConnect(callbackContext, deviceType);
                }
            } else {
                this.callbackContext = callbackContext;
                getCoarseLocationPermission();
            }
            return true;
        } else if ("stopScan".equals(action)) {
            xgtConnectionManager.stopScan(callbackContext);
            return true;
        } else if ("setGoTennaGID".equals(action)) {
            long gid = args.getLong(0);
            String username = args.getString(1);
            xgtCommandCenter.setGoTennaGID(callbackContext, gid, username);
            return true;
        } else if ("sendMessage".equals(action)) {
            String outgoingData = args.getString(0);
            long receiverGID = args.getLong(1);
            boolean willEncrypt = args.getBoolean(2);
            xgtCommandCenter.sendMessage(callbackContext, outgoingData, receiverGID, willEncrypt);
            return true;
        } else if ("setMessageListener".equals(action)) {
            xgtCommandCenter.setMessageListener(callbackContext);
            return true;
        } else if ("addGroupGID".equals(action)) {
            long groupGID = args.getLong(0);
            XUserDataStore.addGroupGID(callbackContext, groupGID);
            return true;
        } else if ("addMulticastGroupGID".equals(action)) {
            long groupGID = args.getLong(0);
            XUserDataStore.addMulticastGroupGID(callbackContext, groupGID);
            return true;
        } else if ("deleteCurrentUser".equals(action)) {
            XUserDataStore.deleteCurrentUser(callbackContext);
            return true;
        } else if ("deleteGroupGID".equals(action)) {
            long groupGID = args.getLong(0);
            XUserDataStore.deleteGroupGID(callbackContext, groupGID);
            return true;
        } else if ("deleteMulticastGroupGID".equals(action)) {
            long groupGID = args.getLong(0);
            XUserDataStore.deleteMulticastGroupGID(callbackContext, groupGID);
            return true;
        } else if ("getCurrentUser".equals(action)) {
            XUserDataStore.getCurrentUser(callbackContext);
            return true;
        } else if ("hasGroupGID".equals(action)) {
            long groupGID = args.getLong(0);
            XUserDataStore.hasGroupGID(callbackContext, groupGID);
            return true;
        } else if ("hasMulticastGroupGID".equals(action)) {
            long groupGID = args.getLong(0);
            XUserDataStore.hasMulticastGroupGID(callbackContext, groupGID);
            return true;
        } else if ("hasValidUser".equals(action)) {
            XUserDataStore.hasValidUser(callbackContext);
            return true;
        } else if ("setCurrentUser".equals(action)) {
            String userString = args.getString(0);
            JSONObject userJSON = new JSONObject(userString);
            User newUser = new User(userJSON);
            XUserDataStore.setCurrentUser(callbackContext, newUser);
            return true;
        }
        return false; // Returning false results in a "MethodNotFound" error.
    }

    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults)
            throws JSONException {
        for (int r : grantResults) {
            if (r == PackageManager.PERMISSION_DENIED) {
                this.callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, "Permission Denied"));
                return;
            }
        }
        switch (requestCode) {
        case COARSE_LOCATION_REQ_CODE:
            xgtConnectionManager.scanAndConnect(this.callbackContext);
            break;
        case FINE_LOCATION_REQ_CODE:
            xgtConnectionManager.scanAndConnect(this.callbackContext);
            break;
        }
    }
}
