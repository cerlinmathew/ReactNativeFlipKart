import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'
import ProductScreen from '../screens/ProductScreen';
import { NavigationContainer } from '@react-navigation/native';

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


const AppNavigator = () => {
  return (
   
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
  )
}

export default AppNavigator