//참고:https://www.youtube.com/watch?v=nQVCkqvU1uE&t=252s
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Splash from "./src/screens/SplashScreen";
import Signup  from "./src/screens/Signup"
import Home from "./src/screens/Home"
import Search from "./src/screens/Search"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" headerMode="none">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
)

const HomeStackScreen = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    </NavigationContainer>
);