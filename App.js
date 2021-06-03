//reference
//https://www.youtube.com/watch?v=nQVCkqvU1uE&t=252s
//https://www.youtube.com/watch?v=nQVCkqvU1uE&t=1416s

import React, {Component} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Splash from "./src/screens/SplashScreen";
import {SignIn,CreateAccount,Profile}  from "./src/screens/Screens";
import Search from "./src/screens/Search";
import Alarm from "./src/screens/Alarm";
import Post from "./src/screens/Post";

import {AuthContext} from './src/Components/context';

//Home화면 스크린(Upper Tab)
import FollowingScreen from "./src/screens/Home/Following"
import GroupScreen from "./src/screens/Home/Group"
import RecommendScreen from './src/screens/Home/Recommend';

//Stack
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const PostStack = createStackNavigator();
const AlarmStack = createStackNavigator();
const ProfileStack = createStackNavigator();

//아래 탭과 윗 탭 동시에 적용시키는 법. 
//https://stackoverflow.com/questions/63996844/react-native-combine-bottomtab-with-toptab
const Tab = createBottomTabNavigator(); // 아래 탭 Bottom Tab
const TopTab = createMaterialTopTabNavigator();// 윗 탭 Upper Tab


// 상단 탭 (Upper Tab)
// 상단 탭 CSS = https://reactnavigation.org/docs/material-top-tab-navigator/
const TopNavigator = () => {
    return (
      <TopTab.Navigator
        tabBarOptions={{
            labelStyle: { fontSize: 12 },
            tabStyle: { margin: 20 },
            style: { backgroundColor: 'powderblue' },
            inactiveTintColor: "blue", 
            indicatorStyle :{
                backgroundColor:'red',
            }
        }}
        >
        {/*탭에 아이콘 넣기 =  https://stackoverflow.com/questions/64473098/add-icons-in-creatematerialtoptabnavigator-reactnavigation-5 */}
            <TopTab.Screen name="Recommend" component={RecommendScreen} />
            <TopTab.Screen name="Following" component={FollowingScreen} />
            <TopTab.Screen name="Group" component={GroupScreen} />
      </TopTab.Navigator>
     );
}

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

    // Splash화면 재생 시간 설정
    React.useEffect(() =>{
        setTimeout(()=> {
            setIsLoading(false);
        }, 3000)
    }, []);

    // Splash화면 재생
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
                    <Tab.Screen name="Post" component={PostStackScreen} />
                    <Tab.Screen name="Alarm" component={AlarmStackScreen} />
                    <Tab.Screen name="Profile" component={ProfileStackScreen} />
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

const HomeStackScreen = (

) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={TopNavigator} 
        options={{
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="DM"
                color="#000"
              />
            ),
          }}
        />
    </HomeStack.Navigator>
);

const SearchStackScreen = () => (
    <SearchStack.Navigator>
        <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
);

const PostStackScreen = () => (
    <PostStack.Navigator>
        <PostStack.Screen name="Post" component={Post} />
    </PostStack.Navigator>
);

const AlarmStackScreen = () => (
    <AlarmStack.Navigator>
        <AlarmStack.Screen name="Alarm" component={Alarm} />
    </AlarmStack.Navigator>
);

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
);

const LoginStackScreen = () => (
    <LoginStack.Navigator >
        <LoginStack.Screen name="Splash" component={Splash} />
        <LoginStack.Screen name="SignIn" component={SignIn} />
    </LoginStack.Navigator>
);