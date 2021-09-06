import React from 'react';
import {Image, TouchableOpacity, Text, ScrollView, View, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { color } from 'react-native-reanimated';
import users from '../../../userList.json';

//참고 자료
//https://www.youtube.com/watch?v=w7zQMbcF2Ag&t=209s

const Tags = () => {
    return (
    <View>
        <Text style={styles.welcomeTitle}>
            몸에좋은채소 님,{"\n"}폴라비에서 인기있는 태그들을 확인해보세요
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {users.map((item) => (
                <View style={{flex:1,width:95,height:130, padding :5, marginHorizontal:5}}>
                    <View style={{flex:0.8}}>
                        <LinearGradient 
                            colors={['#C64DF7','#C64DF7','#C64DF7']}
                            style={{padding:2.5, borderRadius:50}}>   
                            <TouchableOpacity>
                                <Image source={{uri : item.photo}} style={styles.userImage}></Image>                      
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={{flex:0.2, alignItems:"center"}}>
                        <Text style={styles.tagTitle}>#{item.name}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
        <View style={styles.advertisement}>
            <TouchableOpacity style={styles.adContent}>
                <Text style={{textAlign:"center"}}>광고 칸</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

export default Tags;

const styles = StyleSheet.create({
    welcomeTitle :{
        margin:10,
        color: "#707070",
        fontSize: 16,
        fontWeight: "bold"
    },
    userImage:{
        height:80,
        width:80,
        borderWidth:3,
        borderColor:'#fff',
        borderRadius:50,
    },
    tagTitle:{
        paddingVertical:5,
        paddingHorizontal:10,
        backgroundColor:"#C64DF7",
        textAlign: 'center',
        fontWeight:"bold",
        fontSize:10,
        color:"#fff", 
        borderRadius:66      
    },
    advertisement:{
        height:200,
        marginVertical:20,
        marginHorizontal:10, 
    },
    adContent:{
        height:200,
        backgroundColor:"#F0F",
        borderRadius: 10
    }
})