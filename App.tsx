import { StatusBar } from 'react-native'
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native'
import { useEffect } from 'react';
import { foregroundNotification, requestUserPermission } from './android/app/src/services/notificationService';

const App = () => {
  // app loads, asks notification permission
  useEffect(() => {
    requestUserPermission()
    const unsubscribe = foregroundNotification();
    // stops listening to notifications
    return unsubscribe;
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#000' barStyle='dark-content' />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
})
export default App;