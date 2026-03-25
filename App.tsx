import { StatusBar } from 'react-native'
import HomeScreen from './android/app/src/screens/HomeScreen'
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from './android/app/src/screens/ProductScreen';
import { NavigationContainer } from '@react-navigation/native';


// const RootStack = createNativeStackNavigator({

//   // define all screens in app
//   screens: {
//     // screen name used for navigation
//     Home: {
//       // which component to show
//       screen: HomeScreen, 
//       // top header title
//       options: { headerShown: false,},
//     },
//     Profile: {
//       screen: ProductScreen,
//     },
//   },
// });

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Home: 'home',
      Product: 'product/:id',
    },
  },
};


// turns it into a working app
// const Navigation = createStaticNavigation(RootStack);
// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <StatusBar backgroundColor='#000' barStyle='dark-content' />
//       {/* connects to App Starts navigation */}
//         <Navigation />
//     </GestureHandlerRootView>
//   )
// }

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#000' barStyle='dark-content' />

      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Product" 
            component={ProductScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>

    </GestureHandlerRootView>
  )
}

export default App;