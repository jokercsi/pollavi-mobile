//reference
//https://www.youtube.com/watch?v=nQVCkqvU1uE&t=252s
//https://www.youtube.com/watch?v=nQVCkqvU1uE&t=1416s

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Splash from "./src/screens/SplashScreen";
import {SignIn,CreateAccount,Profile}  from "./src/screens/Screens";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";

import {AuthContext} from './src/Components/context';

const LoginStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();


export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null)

    const authContext = React.useMemo(() => {
        return{
            signIn: () => {
                setIsLoading(false);
                setUserToken("asdf");
            },
            signUp: () => {
                setIsLoading(false);
                setUserToken("asdf");
            },
            signOut: () => {
                setIsLoading(false);
                setUserToken(null);
            }
        };
    }, []);


    React.useEffect(() =>{
        setTimeout(()=> {
            setIsLoading(false);
        }, 3000)
    }, []);

    if(isLoading) {
        return<Splash/>
    }

    return(
        <AuthContext.Provider value ={authContext}>
        <NavigationContainer>
            {userToken ? (
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeStackScreen} />
                    <Tab.Screen name="Search" component={SearchStackScreen} />

                </Tab.Navigator>
            ) : (
                <LoginStack.Navigator>
                    <LoginStack.Screen name="회원가입 프로세스" component={SignIn} />
                </LoginStack.Navigator>
            )}
        </NavigationContainer>
        </AuthContext.Provider>
    )
};

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
);

const SearchStackScreen = () => (
    <SearchStack.Navigator>
        <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
);

const LoginStackScreen = () => (
    <LoginStack.Navigator >
        <LoginStack.Screen name="Splash" component={Splash} />
        <LoginStack.Screen name="SignIn" component={SignIn} />
    </LoginStack.Navigator>
);