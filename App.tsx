import { Alert, StatusBar } from 'react-native'
import HomeScreen from './android/app/src/screens/HomeScreen'
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from './android/app/src/screens/ProductScreen';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, StyleSheet, PermissionsAndroid } from 'react-native'
import { useEffect } from 'react';

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


const App = () => {

  const requestPermission = async()=>{
    try{
      const result = await  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
      console.log("Result1", result);
      console.log("Result2", PermissionsAndroid.RESULTS.GRANTED);
      if(result ===PermissionsAndroid.RESULTS.GRANTED){
        //request for device token
      }else{
        Alert.alert("Permission Denied")
      }
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    requestPermission()
  },[])
 
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#000' barStyle='dark-content' />
      <View style={styles.container}>
        <Text>Push Notification</Text>
        </View>
      

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


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:'center'
  }
})
export default App;