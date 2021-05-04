/**
 * @format
 */



 import { AppRegistry } from "react-native";
 import App from "./App";
 import { name as appName } from "./app.json";  
 AppRegistry.registerComponent(appName, () => App);

 import React, {Component} from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 
 import { Splash } from "./src/screens/SplashScreen";
 import { SignupScreen } from "./src/screens/SignupScreen"


const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" headerMode="none">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)