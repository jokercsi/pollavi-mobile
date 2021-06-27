import React, { Component } from 'react'
import {TouchableOpacity, View,Text, StyleSheet} from 'react-native'


const Detail = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Detail')} style={{backgroundColor:"#000"}}>
                <Text>asdfsdafdasgsafg</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Detail;