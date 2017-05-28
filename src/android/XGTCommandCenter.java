package com.dansteren.goTenna;

import com.gotenna.sdk.commands.GTCommand;
import com.gotenna.sdk.commands.GTCommandCenter;
import com.gotenna.sdk.commands.GTError;
import com.gotenna.sdk.interfaces.GTErrorListener;
import com.gotenna.sdk.responses.GTResponse;

import org.apache.cordova.CallbackContext;

public class XGTCommandCenter {

    public void setGoTennaGID(final CallbackContext callbackContext, long gid, String username) {
        GTCommandCenter.getInstance().setGoTennaGID(gid, username, new GTCommand.GTCommandResponseListener() {
            @Override
            public void onResponse(GTResponse response) {
                callbackContext.success();
            }
        }, new GTErrorListener() {
            @Override
            public void onError(GTError error) {
                callbackContext.error(error.toString());
            }
        });
    }
}
