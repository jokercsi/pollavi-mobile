import React, { Component } from 'react'
import {TouchableOpacity, View,Text, StyleSheet} from 'react-native'


const Post = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Detail')} style={{backgroundColor:"#000"}}>
                <Text>jkladfz</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Post;