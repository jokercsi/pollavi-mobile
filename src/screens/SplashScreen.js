import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, StyleSheet, Image } from 'react-native'

export class SplashScreen extends Component {
    render(){
        return (
            <View style = {styles.container}>
                <LinearGradient colors={[ '#C64DF7','#F27875','#FFAC06', '#FFCE00' ]} locations={[0, 0.4, 0.7, 1]} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }} style={styles.linearGradient}>
                        <Image style={styles.logo} source ={require('../assets/images/pollaviLogo.png')} />
                </LinearGradient>
            </View>
        )
    }
}
export default SplashScreen

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    logo: {
        width: 300,
        height: 80
    }
  });