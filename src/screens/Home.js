import React, { Component } from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'


export class Home extends Component {
    render(){
        return (
            <View>
                <Image style={styles.logo} source ={require('../assets/images/pollavi1.png')} />

            </View>
        )
    }
}
export default Home

export const styles = StyleSheet.create({
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