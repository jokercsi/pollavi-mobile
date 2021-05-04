import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import {Text, View, StyleSheet, Image } from 'react-native'
// 참고할만한 사이트
// https://www.youtube.com/watch?v=_-lOhP46zU8

export class SplashScreen extends Component {
    render(){
        return (
            <View style = {styles.container}>
                <LinearGradient colors={[ '#C64DF7','#F27875','#FFAC06', '#FFCE00' ]} locations={[0, 0.4, 0.7, 1]} useAngle={true} angle={45} angleCenter={{ x: 0.5, y: 0.5 }} style={styles.linearGradient}>
                        <View style = {styles.logo_container}>
                        {/* <Image style={styles.logo} source ={require('../assets/images/pollaviLogo.png')} /> */}
                        </View>
                </LinearGradient> 
                <LottieView source={require('../assets/images/netflix.json')} 
                    autoPlay
                    loop={false}
                    speed={0.5}
                    onAnimationFinish = {()=>{
                    console.log('Animation Finished!')
                }}
                />
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
    logo_container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 230,
        height: 100,
    }
  });