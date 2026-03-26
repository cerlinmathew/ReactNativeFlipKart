import notifee, { AndroidImportance } from '@notifee/react-native';

export const showNotification = async (title: string, body: string) => {
  // Create channel (Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });

  // Display notification
  await notifee.displayNotification({
    title,
    body,
    android: {
      channelId,
      smallIcon: 'ic_launcher', // default icon
    },
  });
};