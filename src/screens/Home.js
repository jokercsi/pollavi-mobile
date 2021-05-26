import React, { Component } from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Following from "./HomeCat/Following"
import Group from "./HomeCat/Group"
//import Recommend from "./HomeCat/Recommend"


// const Tab = createMaterialTopTabNavigator();
// <Tab.Navigator>
// <Tab.Screen name="Following" component={Following} />
// <Tab.Screen name="Group" component={Group} />
// </Tab.Navigator>

const Home = () => {
    return (
        <View>
            <Text>
                home
            </Text>
        </View>
    );
};

//export default Home


// export class Home extends Component {
//     render(){
//         return (
//             <View>
//                 <Image style={styles.logo} source ={require('../assets/images/pollavi1.png')} />
//                 <Tab.Navigator>
//                     <Tab.Screen name="Follwing" component={Following} />
//                     <Tab.Screen name="Group" component={Group} />
//                     <Tab.Screen name="Recommend" component={Recommend} />
//                 </Tab.Navigator>
//             </View>
//         )
//     }
// }
// export const styles = StyleSheet.create({
//     logo_container:{
//         flex:1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     logo: {
//         width: 230,
//         height: 100,
//     }
//   });