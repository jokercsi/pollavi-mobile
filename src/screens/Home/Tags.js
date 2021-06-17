import React from 'react';
import {Image, TouchableOpacity, Text, ScrollView, View, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import users from '../../../userList.json';

//참고 자료
//https://www.youtube.com/watch?v=w7zQMbcF2Ag&t=209s

const Tags = () => {
    return (
    <View>
        <ScrollView horizontal>
            {users.map((item, index) => (
                <View style={{width:85, padding :5}}>
                    <LinearGradient 
                        colors={['#bc2a8d','#e95950','#fccc63']}
                        style={{padding:2, borderRadius:50}}>   
                        <TouchableOpacity>
                            <Image source={{uri : item.photo}} style={styles.userImage}></Image>                      
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            ))}
        </ScrollView>
        <View style={{height:300, marginVertical:20, marginHorizontal:5, backgroundColor:"#F0F"}}>
            <TouchableOpacity>
                <Text>광고 칸</Text>
            </TouchableOpacity>
        </View>
    </View>

    );
};

export default Tags;

const styles = StyleSheet.create({
    userImage:{
        height:70,
        width:70,
        borderRadius:50,
    }
})