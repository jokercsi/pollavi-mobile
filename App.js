//reference
//https://www.youtube.com/watch?v=nQVCkqvU1uE&t=252s
//https://www.youtube.com/watch?v=nQVCkqvU1uE&t=1416s

import React, {Component} from 'react';
import {Button,View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//아이콘
import Feather from './node_modules/react-native-vector-icons/Feather';
import Ionicons from './node_modules/react-native-vector-icons/Ionicons';

//화면
import Splash from "./src/screens/SplashScreen";
import {SignIn,CreateAccount,Profile}  from "./src/screens/Screens";
import Alarm from "./src/screens/Alarm";
import Post from "./src/screens/Post";

import Search from "./src/screens/Search/Search";
import Detail from './src/screens/Home/Detail';

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
                tabStyle: { },
                style: { marginHorizontal:50, backgroundColor:"#fff", shadowColor:"#fff"  },
                //inactiveTintColor: "blue", 
                indicatorStyle :{
                    backgroundColor: '#36A7E7',
                    height: '10%',
                    borderRadius: 50,
                    marginBottom: 8,
                    width: '2%',
                    left:"16%",
                },
            }}
            >
            {/*탭에 아이콘 넣기 =  https://stackoverflow.com/questions/64473098/add-icons-in-creatematerialtoptabnavigator-reactnavigation-5 */}
                <TopTab.Screen 
                    name="추천" 
                    component={RecommendScreen} 
                />
                <TopTab.Screen name="팔로잉" component={FollowingScreen} />
                <TopTab.Screen name="그룹" component={GroupScreen} />
        </TopTab.Navigator>
     );
}

export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null)

    const MyTheme = {
        dark: false,
        colors: {
          primary: 'rgb(255, 45, 85)',
          background: 'white',
          card: 'rgb(255, 255, 255)',
          text: 'black',
          border: 'rgb(199, 199, 204)',
          notification: 'rgb(255, 69, 58)',
        },
      };

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
        }, 100)
    }, []);

    // Splash화면 재생
    if(isLoading) {
        return<Splash/>
    }

    return(
        <AuthContext.Provider value ={authContext}>
        <NavigationContainer theme={MyTheme}>
            {userToken ? (
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if (route.name === 'Home') {
                            iconName = focused ? 'ios-home': 'ios-home-outline';
                        } 
                        else if (route.name === 'Search') {
                            iconName = focused ? 'search-sharp' : 'search-outline';
                        } 
                        else if (route.name === 'Post') {
                            iconName = focused ? 'ios-add-sharp' : 'ios-add-outline';
                        } 
                        else if (route.name === 'Alarm') {
                            iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
                        } 
                        else if (route.name === 'Profile') {
                            iconName = focused ? 'person-sharp' : 'person-outline';
                        }
            
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'black',
                        inactiveTintColor: 'gray',
                    }}
                
                >
                    <Tab.Screen name="Home" component={HomeStackScreen}  />
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

function LogoTitle() {
    return (
      <Image
        style={{ width: 130, height: 110 }}
        source={require('./src/assets/images/pollavi1.png')}
      />
    );
  }

const HomeStackScreen = () => (
    <HomeStack.Navigator initialRouteName="Pollavi">
        <HomeStack.Screen name="Pollavi" component={TopNavigator} 
        options={{
            headerStyle:{  
                height: 80,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
                <View style={{marginRight:10}}>
                    <Feather.Button 
                        backgroundColor="#fff"
                        color="#000"
                        size={25} 
                        name="message-square" 
                        onPress={() => alert('This is a button!')}
                    />
                </View>
            ),
          }}
        />
        <HomeStack.Screen name="Detail" component={Detail} />
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
        <PostStack.Screen name="Detail" component={Detail} />
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