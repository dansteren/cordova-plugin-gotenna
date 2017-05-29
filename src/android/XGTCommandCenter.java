package com.dansteren.goTenna;

import com.gotenna.sdk.commands.GTCommand;
import com.gotenna.sdk.commands.GTCommandCenter;
import com.gotenna.sdk.commands.GTError;
import com.gotenna.sdk.interfaces.GTErrorListener;
import com.gotenna.sdk.responses.GTResponse;
import com.gotenna.sdk.user.User;
import com.gotenna.sdk.user.UserDataStore;

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

    public void sendMessage(final CallbackContext callbackContext, String outgoingData,
                            long receiverGID, boolean willEncrypt) {
        User currentUser = UserDataStore.getInstance().getCurrentUser();
        if (currentUser == null) {
            callbackContext.error("GID not set. User must set GID.");
            return;
        }
        if (outgoingData.length() == 0) {
            callbackContext.error("Message Empty");
            return;
        }
        Message message = Message.createReadyToSendMessage(currentUser.getGID(), receiverGID, outgoingData);
        GTCommandCenter.getInstance().sendMessage(message.toBytes(), message.getReceiverGID(),
            new GTCommand.GTCommandResponseListener() {
                @Override
                public void onResponse(GTResponse response) {
                    callbackContext.success();
                }
            }, new GTErrorListener() {
                @Override
                public void onError(GTError error) {
                    callbackContext.error(error.toString());
                }
            }, willEncrypt);
    }
}
