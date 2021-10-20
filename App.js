//reference
//https://www.youtube.com/watch?v=nQVCkqvU1uE&t=252s
//https://www.youtube.com/watch?v=nQVCkqvU1uE&t=1416s

import React, {Component} from 'react';
import {Button, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//아이콘
import Feather from './node_modules/react-native-vector-icons/Feather';
import Ionicons from './node_modules/react-native-vector-icons/Ionicons';

//화면
import Splash from "./src/screens/SplashScreen";
import {ToS, SignIn, CreateAccount, Profile, Username, Email, Password}  from "./src/screens/Login";
import Alarm from "./src/screens/Alarm/Alarm";
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
                pressOpacity: 9,
                pressColor: "white",
                tabStyle: { },
                style: { marginHorizontal:50, backgroundColor:"#fff", shadowColor:"#fff", elevation: 0,  shadowOpacity: 0, },
                //inactiveTintColor: "blue", 
                indicatorStyle :{
                    backgroundColor: '#36A7E7',
                    marginBottom: 8,
                    height: 5,
                    width: 5,
                    borderRadius: 5/2,
                    left:"24%"
                },
                
            }}
            >
            {/*탭에 아이콘 넣기 =  https://stackoverflow.com/questions/64473098/add-icons-in-creatematerialtoptabnavigator-reactnavigation-5 */}
                <TopTab.Screen 
                    name="추천" 
                    component={RecommendScreen} 
                />
                <TopTab.Screen name="팔로잉" component={FollowingScreen} />
        </TopTab.Navigator>
     );
}

export default () => {
    //비밀번호(토큰)에 해당하는 부분 비밀번호 있으면 null 
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
        }, 1000)
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
                        
                        // bottom tab 타이틀 지우기
                        tabBarLabel:() => {return null},
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
                        //키보드 사용하면 bottom tab 안올리기
                        keyboardHidesTabBar: true
                    }}
                
                >
                    <Tab.Screen name="Home" component={HomeStackScreen}  />
                    <Tab.Screen name="Search" component={SearchStackScreen} />
                    <Tab.Screen name="Post" component={PostStackScreen} />
                    <Tab.Screen name="Alarm" component={AlarmStackScreen}/>
                    <Tab.Screen name="Profile" component={ProfileStackScreen} />
                </Tab.Navigator>
            ) : (
                <LoginStack.Navigator      
                    initialRouteName='ToS'
                    screenOptions={{
                        headerTitle: false,
                        headerStyle: { elevation: 0 },
                        cardStyle: { backgroundColor: '#fff' },
                    }}
                >
                    <LoginStack.Screen name="ToS" component={ToS} options={{headerShown: false}}/>
                    <LoginStack.Screen name="Login" component={SignIn}  />
                    <LoginStack.Screen name="CreateAccount" component={CreateAccount}  />
                    <LoginStack.Screen name="Email" component={Email} />
                    <LoginStack.Screen name="Password" component={Password} />
                    <LoginStack.Screen name="Username" component={Username}/>
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
    <HomeStack.Navigator initialRouteName="Pollavi" screenOptions={{gestureEnabled: true}}>
        <HomeStack.Screen 
            name="Pollavi" 
            component={TopNavigator} 
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
    <SearchStack.Navigator headerMode="false">
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
    <AlarmStack.Navigator >
        <AlarmStack.Screen name="Alarm" component={Alarm} options={{ title: '알림' }} />
    </AlarmStack.Navigator>
);

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
    </ProfileStack.Navigator>
);
