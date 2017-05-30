package com.dansteren.goTenna;

import com.gotenna.sdk.commands.GTCommand;
import com.gotenna.sdk.commands.GTCommandCenter;
import com.gotenna.sdk.commands.GTError;
import com.gotenna.sdk.interfaces.GTErrorListener;
import com.gotenna.sdk.messages.GTBaseMessageData;
import com.gotenna.sdk.messages.GTGroupCreationMessageData;
import com.gotenna.sdk.messages.GTLocationOnlyMessageData;
import com.gotenna.sdk.messages.GTLocationRequestOnlyMessageData;
import com.gotenna.sdk.messages.GTMessageData;
import com.gotenna.sdk.messages.GTTextOnlyMessageData;
import com.gotenna.sdk.responses.GTResponse;
import com.gotenna.sdk.user.User;
import com.gotenna.sdk.user.UserDataStore;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;

import org.json.JSONObject;
import org.json.JSONException;

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

    public void setMessageListener(final CallbackContext callbackContext){
        GTCommandCenter.getInstance().setMessageListener(new GTCommandCenter.GTMessageListener() {
                @Override
                public void onIncomingMessage(GTMessageData messageData) {
                    // Custom formatted message
                    PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, messageData.getDataToProcess());
                    pluginResult.setKeepCallback(true);
                    callbackContext.sendPluginResult(pluginResult);
                }

                @Override
                public void onIncomingMessage(GTBaseMessageData baseMessageData) {
                    PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
                    if (baseMessageData instanceof GTTextOnlyMessageData) {
                        // Text message
                        GTTextOnlyMessageData gtTextOnlyMessageData = (GTTextOnlyMessageData)baseMessageData;
                        Message incomingMessage = Message.createMessageFromData(gtTextOnlyMessageData);
                        try {
                            JSONObject json = new JSONObject();
                            json.put("senderGID", incomingMessage.getSenderGID());
                            json.put("receiverGID", incomingMessage.getReceiverGID());
                            json.put("sentDate", incomingMessage.getSentDate());
                            json.put("text", incomingMessage.getText());
                            // message = json.toString();
                            pluginResult = new PluginResult(PluginResult.Status.OK, json);

                        } catch (JSONException e) {
                            pluginResult = new PluginResult(PluginResult.Status.ERROR, "JSON execption throw while parsing message");
                        }
                    } else if (baseMessageData instanceof GTGroupCreationMessageData) {
                        // Group Invitation
                        GTGroupCreationMessageData gtGroupCreationMessageData = (GTGroupCreationMessageData)baseMessageData;

                        // JSONObject json = new JSONObject();
                        // json.put("groupGID", gtGroupCreationMessageData.getGroupGID());
                        // json.put("groupMembersInfo", gtGroupCreationMessageData.getGroupMembersInfo());
                        // json.put("getSharedSecret", gtGroupCreationMessageData.getSharedSecret());
                        // message = json.toString();
                        String message = "Group Invitation Received";
                        pluginResult = new PluginResult(PluginResult.Status.OK, message); // TODO
                    } else if (baseMessageData instanceof GTLocationOnlyMessageData) {
                        // TODO: Handle Location message
                        String message = "Location Received";
                        pluginResult = new PluginResult(PluginResult.Status.OK, message); // TODO
                    } else if (baseMessageData instanceof GTLocationRequestOnlyMessageData) {
                        // TODO: Handle location request
                        String message = "Location Requested";
                        pluginResult = new PluginResult(PluginResult.Status.OK, message); // TODO
                    }
                    pluginResult.setKeepCallback(true);
                    callbackContext.sendPluginResult(pluginResult);
                }
            });
    }
}
