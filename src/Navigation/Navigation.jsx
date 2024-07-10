import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Slider2 from '../Screens/Slider2';
import LogIn from '../Screens/LogIn';
import SignUp from '../Screens/SignUp';
import TrackingScreen from '../Screens/TrackingScreen';

const Stack=createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='Slider 2' component={Slider2}/>
            <Stack.Screen name='Log In' component={LogIn}/>
            <Stack.Screen name='Sign Up' component={SignUp}/>
            <Stack.Screen name='Tracking Screen' component={TrackingScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}