import messaging from '@react-native-firebase/messaging';
import { Alert, PermissionsAndroid } from 'react-native';

export const requestUserPermission = async () => {
  try {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
    if (result === PermissionsAndroid.RESULTS.GRANTED) {
      await requestToken();
    } else {
      Alert.alert("Permission Denied");
    }
  } catch (error) {
    console.log('Permission error:', error);
  }
};

const requestToken = async () => {
  try {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log("Device Token", token);
  } catch (error) {
    console.log('Token error:', error);  // This is likely where your crash is
  }
};

export const foregroundNotification = () => {
  return messaging().onMessage(async remoteMessage => {
    const title = remoteMessage.notification?.title || 'No Title';
    const body = remoteMessage.notification?.body || 'No Body';
    Alert.alert(title, body);
  });
};