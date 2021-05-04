
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

//react-navigation 5.x


import Splash from '../screens/SplashScreen';
import TermsConditions from '../screens/TermsConditions'
import Home from '../screens/Home'
import SignUp from '../screens/SignUp'

const Stack = createStackNavigator();

export default class Main extends Component {
    render(){
        return(
            <View>
                
            </View>

            // <NavigationContainer>
            //     <Stack.Navigator initialRouteName="Splash" headerMode="none">
            //         <Stack.Screen name="Splash" component={Splash} />
            //         <Stack.Screen name="TermsConditions" component={TermsConditions} />
            //     </Stack.Navigator>
            // </NavigationContainer>
        );
    }
}


// const MainNavigator = createStackNavigator({
//     Splash: {screen: Splash},
//     SignUp: {screen: SignUp},
//     TermsConditions: {screen: TermsConditions}, 
//     Home: {screen: Home},
// },{
//     headerMode: 'none',
//     navigationOptions:{
//         headerVisible: false,
//     }
// });

// export default createAppContainer(
//     MainNavigator
// );