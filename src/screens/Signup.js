import React, { Component } from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'


export class Signup extends Component {
    render(){
        return (
            <View>
                <Text>
                    회원가입 프로세스
                </Text>

                <Button
                
                onPress={() => this.props.navigation.navigate('Home')}
                title="Info"
                color="#000"
                />

            </View>
        )
    }
}
export default Signup