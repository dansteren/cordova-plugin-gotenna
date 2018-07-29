package com.dansteren.gotenna;

import com.gotenna.sdk.user.User;
import com.gotenna.sdk.user.UserDataStore;

import org.apache.cordova.CallbackContext;

import org.json.JSONObject;

public class XUserDataStore {

    public static void addGroupGID(CallbackContext callbackContext, long groupGID) {
        UserDataStore.getInstance().addGroupGID(groupGID);
        callbackContext.success();
    }

    public static void addMulticastGroupGID(CallbackContext callbackContext, long groupGID) {
        UserDataStore.getInstance().addMulticastGroupGID(groupGID);
        callbackContext.success();
    }

    public static void deleteCurrentUser(CallbackContext callbackContext) {
        UserDataStore.getInstance().deleteCurrentUser();
        callbackContext.success();
    }

    public static void deleteGroupGID(CallbackContext callbackContext, long groupGID) {
        UserDataStore.getInstance().deleteGroupGID(groupGID);
        callbackContext.success();
    }

    public static void deleteMulticastGroupGID(CallbackContext callbackContext, long groupGID) {
        UserDataStore.getInstance().deleteMulticastGroupGID(groupGID);
        callbackContext.success();
    }

    public static void hasGroupGID(CallbackContext callbackContext, long groupGID) {
        boolean hasGroupGID = UserDataStore.getInstance().hasGroupGID(groupGID);
        if (hasGroupGID) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    public static void hasMulticastGroupGID(CallbackContext callbackContext, long groupGID) {
        boolean hasMulticastGroupGID = UserDataStore.getInstance().hasMulticastGroupGID(groupGID);
        if (hasMulticastGroupGID) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    public static void getCurrentUser(CallbackContext callbackContext) {
        if (UserDataStore.getInstance().hasValidUser()) {
            User currentUser = UserDataStore.getInstance().getCurrentUser();
            callbackContext.success(currentUser.toJSONObject().toString());
        } else {
            callbackContext.success("");
        }
    }

    public static void hasValidUser(CallbackContext callbackContext) {
        // TODO: find a way to return a boolean
        boolean hasValidUser = UserDataStore.getInstance().hasValidUser();
        if (hasValidUser) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    public static void isMyGID(CallbackContext callbackContext, long gid) {
        boolean isMyGID = UserDataStore.getInstance().isMyGID(gid);
        if (isMyGID) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }

    public static void registerUser(CallbackContext callbackContext, String name, long gid) {
        User user = UserDataStore.getInstance().registerUser(name, gid);
        callbackContext.success(user.toJSONObject().toString());
    }

    public static void saveCurrentUser(CallbackContext callbackContext) {
        UserDataStore.getInstance().saveCurrentUser();
        callbackContext.success();
    }

    public static void setCurrentUser(CallbackContext callbackContext, User user) {
        UserDataStore.getInstance().setCurrentUser(user);
        callbackContext.success();
    }

    public static void updateLastConnectedTime(CallbackContext callbackContext) {
        UserDataStore.getInstance().updateLastConnectedTime();
        callbackContext.success();
    }

    public static void updateLastLocation(CallbackContext callbackContext, double latitude, double longitude,
            float accuracy, long timestamp) {
        UserDataStore.getInstance().updateLastLocation(latitude, longitude, accuracy, timestamp);
        callbackContext.success();
    }
}
