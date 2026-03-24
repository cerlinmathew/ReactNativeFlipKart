import { View, StatusBar } from 'react-native'
import HomeScreen from './android/app/src/screens/HomeScreen'
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from './android/app/src/screens/ProductScreen';


const RootStack = createNativeStackNavigator({

  // define all screens in app
  screens: {
    // screen name used for navigation
    Home: {
      // which component to show
      screen: HomeScreen, 
      // top header title
      options: { headerShown: false,},
    },
    Profile: {
      screen: ProductScreen,
    },
  },
});

// turns it into a working app
const Navigation = createStaticNavigation(RootStack);
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#000' barStyle='dark-content' />
      {/* connects to App Starts navigation */}
        <Navigation />
    </GestureHandlerRootView>
  )
}

export default App;