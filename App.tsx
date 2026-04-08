import 'react-native-reanimated';
import { StatusBar } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from 'react-native'
import { useEffect } from 'react';
import { foregroundNotification, requestUserPermission } from './android/app/src/services/notificationService';
import AppNavigator from './android/app/src/navigation/AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  // app loads, asks notification permission
  useEffect(() => {
  requestUserPermission();
  const unsubscribe = foregroundNotification();
  return unsubscribe;
}, []);

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={[styles.container, { backgroundColor: '#298588' }]}>
        <StatusBar  barStyle='light-content' />
        <AppNavigator />
      </SafeAreaView>
    </GestureHandlerRootView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App;