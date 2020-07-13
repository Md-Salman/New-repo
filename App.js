import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/home';
import SinglePicModeScreen from './screens/singlePicMode'
import DoublePicsModeScreen from './screens/doublePicsMode';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='homeScreen' component={HomeScreen} />
        <Stack.Screen name='singlePicModeScreen' component={SinglePicModeScreen} />
        <Stack.Screen name='doublePicModeScreen' component={DoublePicsModeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});