import * as React from 'react';
import {
    createStackNavigator,
  } from '@react-navigation/stack';
import LoginScreen from '../screens/login';

const Stack = createStackNavigator();

 export function AppStack() {
     return (
         <Stack.Navigator headerMode="none" initialRouteName="Login">
             <Stack.Screen name="Login" component={LoginScreen} />
             {/* <Stack.Screen name="Register" component={Register} /> */}
         </Stack.Navigator>
     )
 }