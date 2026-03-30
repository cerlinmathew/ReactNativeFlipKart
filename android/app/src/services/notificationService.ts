import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';


export const requestUserPermission = async () => {
    try {
      // Requesting permission: If granted call requestToken(), denied show alert
      const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
      console.log("Result1", result);
      console.log("Result2", PermissionsAndroid.RESULTS.GRANTED);
      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        //request for device token
        await requestToken()
      } else {
        Alert.alert("Permission Denied")
      }
    } catch (error) {
      console.log(error)
    }
  }

    
  //Getting FCM Device Token
  const requestToken = async () => {
    try {
      // uniquely identifies device, Backend uses this token to send push notifications
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log("Device Token", token);
      // save the token to the db
    } catch (error) {
      console.log(error);
    }
  }

  //foreground notification
  export const foregroundNotification = () => {
    return messaging().onMessage(async remoteMessage => {
      const title = remoteMessage.notification?.title || 'No Title';
      const body = remoteMessage.notification?.body || 'No Body';
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      Alert.alert(title, body);
    });
  };